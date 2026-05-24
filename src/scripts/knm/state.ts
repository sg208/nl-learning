import { TOPICS } from '~/data/knm/topics';
import type { KnmSnapshot } from '~/lib/knm-session';
import { validateKnmSnapshot } from '~/lib/knm-session';

import { EXAM_DURATION, type AppState } from './types';

export const state: AppState = {
  tab: 'home',
  selectedTopic: null,
  examConfig: null,
  exam: null,
  answers: {},
  current: 0,
  submitted: false,
  timeLeft: EXAM_DURATION,
  timerHandle: null,
  reviewing: false,
  scrollToNoteHeading: null,
};

export const getKnmSnapshot = (): KnmSnapshot => ({
  tab: state.tab,
  selectedTopicId: state.selectedTopic?.id ?? null,
  examConfig: state.examConfig,
  exam: state.exam,
  answers: state.answers,
  current: state.current,
  submitted: state.submitted,
  timeLeft: state.timeLeft,
  reviewing: state.reviewing,
  scrollToNoteHeading: state.scrollToNoteHeading,
});

export const isValidSnapshot = validateKnmSnapshot;

export const applyKnmSnapshot = (
  snapshot: KnmSnapshot,
  refreshExamTopicLabels: () => void,
  startExamTimer: () => void,
): void => {
  state.tab = snapshot.tab;
  state.selectedTopic = snapshot.selectedTopicId
    ? (TOPICS.find((topic) => topic.id === snapshot.selectedTopicId) ?? null)
    : null;
  state.examConfig = snapshot.examConfig;
  state.exam = snapshot.exam
    ? snapshot.exam.map((question) => ({
        ...question,
        noteHeadings: question.noteHeadings ?? [],
      }))
    : null;
  state.answers = snapshot.answers;
  state.current = snapshot.current;
  state.submitted = snapshot.submitted;
  state.timeLeft = snapshot.timeLeft;
  state.reviewing = snapshot.reviewing;
  state.scrollToNoteHeading = snapshot.scrollToNoteHeading ?? null;
  state.timerHandle = null;
  refreshExamTopicLabels();
  if (state.examConfig && state.exam && !state.submitted) {
    startExamTimer();
  }
};
