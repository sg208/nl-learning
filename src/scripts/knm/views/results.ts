import { TOPICS } from '~/data/knm/topics';
import { getKnmLang, getTopicLabel } from '~/lib/knm-content';

import { el } from '../dom/el';
import { stopExamTimer } from '../exam-engine';
import { setState } from '../set-state';
import { state } from '../state';
import { EXAM_DURATION } from '../types';
import { t } from '../ui-strings';
import { renderReview } from './review';

type TopicScore = {
  correct: number;
  total: number;
  label: string;
  color: string;
};

export const renderResults = (): HTMLDivElement => {
  const u = t();
  if (state.reviewing) return renderReview();
  const { exam, answers } = state;
  if (!exam) return el('div');

  const score = exam.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);
  const passed = score >= 26;
  const lang = getKnmLang();
  const perTopic: Record<string, TopicScore> = {};
  for (const topic of TOPICS) {
    perTopic[topic.id] = {
      correct: 0,
      total: 0,
      label: getTopicLabel(topic, lang),
      color: topic.color,
    };
  }
  exam.forEach((q, i) => {
    perTopic[q.topic].total++;
    if (answers[i] === q.answer) perTopic[q.topic].correct++;
  });

  const div = el('div', { className: 'results-center' });
  div.appendChild(el('div', { className: 'results-emoji' }, passed ? '🎉' : '📖'));
  div.appendChild(
    el(
      'h2',
      { className: 'results-score ' + (passed ? 'results-score--pass' : 'results-score--fail') },
      `${score} / 40`,
    ),
  );
  div.appendChild(
    el(
      'div',
      { className: 'muted results-meta' },
      `${Math.round((score / 40) * 100)}% — ${u.passRate}`,
    ),
  );
  div.appendChild(
    el(
      'div',
      { className: 'results-status ' + (passed ? 'results-status--pass' : 'results-status--fail') },
      passed ? u.passed : u.failed,
    ),
  );

  const topicCard = el('div', { className: 'card topic-scores-card' });
  topicCard.appendChild(el('div', { className: 'mono muted topic-scores-label' }, u.scorePerTopic));
  for (const tp of Object.values(perTopic)) {
    const scoreColor =
      tp.correct === tp.total ? '#2a9d8f' : tp.correct >= 3 ? '#c8bfb0' : '#e63946';
    const row = el('div', { className: 'topic-score-row' });
    row.appendChild(el('span', { style: { color: tp.color } }, tp.label));
    row.appendChild(
      el('span', { className: 'mono', style: { color: scoreColor } }, `${tp.correct}/${tp.total}`),
    );
    topicCard.appendChild(row);
  }
  div.appendChild(topicCard);

  const btnRow = el('div', { className: 'row-btns' });
  btnRow.appendChild(
    el(
      'button',
      { className: 'big-btn big-btn--sky', onClick: () => setState({ reviewing: true }) },
      u.reviewBtn,
    ),
  );
  btnRow.appendChild(
    el(
      'button',
      {
        className: 'big-btn big-btn--danger-flex',
        onClick: () => {
          stopExamTimer();
          setState({
            examConfig: null,
            exam: null,
            submitted: false,
            reviewing: false,
            answers: {},
            current: 0,
            timeLeft: EXAM_DURATION,
            timerHandle: null,
          });
        },
      },
      u.newExamBtn,
    ),
  );
  div.appendChild(btnRow);
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
};
