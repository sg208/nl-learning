import { getKnmLang, getLocalizedText } from '~/lib/knm-content';

import { el } from '../dom/el';
import { setState } from '../set-state';
import { state } from '../state';
import { t } from '../ui-strings';

export const renderReview = (): HTMLDivElement => {
  const u = t();
  const { exam, answers } = state;
  if (!exam) return el('div');

  const div = el('div');
  div.appendChild(
    el(
      'button',
      { className: 'back-btn', onClick: () => setState({ reviewing: false }) },
      u.backToResults,
    ),
  );

  for (let i = 0; i < exam.length; i++) {
    const q = exam[i];
    const correct = answers[i] === q.answer;
    const yourAns = answers[i] != null ? q.options[answers[i]] : u.notAnswered;
    const card = el('div', {
      className: 'result-card ' + (correct ? 'correct-card' : 'wrong-card'),
    });

    card.appendChild(
      el(
        'div',
        { className: 'mono review-topic-meta', style: { color: q.topicColor } },
        q.topicLabel.toUpperCase() + ' · #' + (i + 1),
      ),
    );
    card.appendChild(el('div', { className: 'review-question' }, q.q));
    card.appendChild(
      el(
        'div',
        {
          className:
            'review-answer ' + (correct ? 'review-answer--correct' : 'review-answer--wrong'),
        },
        (correct ? '✓ ' : '✗ ') + u.yourAnswer + ': ' + yourAns,
      ),
    );
    if (!correct) {
      card.appendChild(
        el('div', { className: 'review-correct-answer' }, u.correct + ': ' + q.options[q.answer]),
      );
    }
    card.appendChild(
      el(
        'div',
        { className: 'review-explanation' },
        getLocalizedText(q.explanation, q.explanationEn, getKnmLang()),
      ),
    );
    div.appendChild(card);
  }
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
};
