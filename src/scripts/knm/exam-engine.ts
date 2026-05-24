import { QUESTION_BANK } from '~/data/knm/question-bank';
import { getQuestionNoteHeadings } from '~/data/knm/question-concept-map';
import { TOPICS } from '~/data/knm/topics';
import { getKnmLang, getTopicLabel } from '~/lib/knm-content';
import { persistKnmLiveSession } from '~/lib/knm-session';

import { announceKnm } from './dom/announce';
import { setState } from './set-state';
import { getKnmSnapshot, state } from './state';
import { EXAM_DURATION, type ExamQuestion, type TabId } from './types';

const shuffle = <T>(items: readonly T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const buildExam = (examNumber: number, variantIdx: number): ExamQuestion[] => {
  const lang = getKnmLang();
  const exam: ExamQuestion[] = [];
  const examKey = String(examNumber) as '1' | '2' | '3';
  for (const topic of TOPICS) {
    const topicQuestions = QUESTION_BANK[topic.id][examKey];
    topicQuestions.forEach((q, index) => {
      const correct = q.options[q.answer];
      const opts = shuffle(q.options);
      exam.push({
        topic: topic.id,
        topicLabel: getTopicLabel(topic, lang),
        topicColor: topic.color,
        q: q.variants[variantIdx % q.variants.length],
        options: opts,
        answer: opts.indexOf(correct),
        explanation: q.explanation,
        explanationEn: q.explanationEn,
        noteHeadings: getQuestionNoteHeadings(topic.id, examKey, index),
      });
    });
  }
  return shuffle(exam);
};

export const stopExamTimer = (): void => {
  if (state.timerHandle) {
    clearInterval(state.timerHandle);
    state.timerHandle = null;
  }
};

export const startExamTimer = (): void => {
  stopExamTimer();
  let tickCount = 0;
  const handle = setInterval(() => {
    state.timeLeft -= 1;
    tickCount += 1;
    if (tickCount % 15 === 0) {
      persistKnmLiveSession(getKnmSnapshot());
    }
    if (state.timeLeft <= 0) {
      clearInterval(handle);
      state.timerHandle = null;
      setState({ submitted: true, timerHandle: null });
      announceKnm(
        getKnmLang() === 'nl'
          ? 'Tijd is om. Resultaten staan klaar.'
          : 'Time is up. Results are ready.',
      );
      return;
    }
    const timerEl = document.getElementById('timer-display');
    if (timerEl) {
      const minutes = Math.floor(state.timeLeft / 60);
      const seconds = state.timeLeft % 60;
      timerEl.textContent = `⏱ ${minutes}:${String(seconds).padStart(2, '0')}`;
      timerEl.classList.toggle('warning', state.timeLeft < 300);
    }
  }, 1000);
  state.timerHandle = handle;
};

export const refreshExamTopicLabels = (): void => {
  if (!state.exam) return;
  const lang = getKnmLang();
  state.exam = state.exam.map((question) => {
    const topic = TOPICS.find((item) => item.id === question.topic);
    if (!topic) return question;
    return { ...question, topicLabel: getTopicLabel(topic, lang) };
  });
};

export const resetTabViewState = (tab: TabId): void => {
  stopExamTimer();
  setState({
    tab,
    selectedTopic: null,
    examConfig: null,
    exam: null,
    answers: {},
    current: 0,
    submitted: false,
    reviewing: false,
    scrollToNoteHeading: null,
    timeLeft: EXAM_DURATION,
    timerHandle: null,
  });
};
