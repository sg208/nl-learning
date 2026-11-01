import { el } from '../dom/el';
import { buildExam, startExamTimer } from '../exam-engine';
import { setState } from '../set-state';
import { state } from '../state';
import { EXAM_DURATION } from '../types';
import { t } from '../ui-strings';

// The picker is long, so a new exam would open scrolled past its top bar and
// question navigator. Bring the panel back to just below the sticky bars
// (html scroll-padding-top already accounts for their height).
const scrollExamIntoView = (): void => {
  requestAnimationFrame(() => {
    const panel = document.getElementById('knm-tabpanel');
    const scrollOffset =
      parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    if (!panel || panel.getBoundingClientRect().top >= scrollOffset) return;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    panel.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth', block: 'start' });
  });
};

export const renderExamPicker = (): HTMLDivElement => {
  const u = t();
  const div = el('div');

  const fmtCard = el('div', { className: 'card card--spaced' });
  fmtCard.appendChild(el('h2', { className: 'section-label' }, u.formatLabel));
  const ul = el('ul', { className: 'dim format-list' });
  for (const item of u.formatItems) {
    const li = el('li');
    if (item.bold) {
      li.appendChild(el('strong', {}, item.bold));
      li.appendChild(document.createTextNode(item.rest));
    } else {
      li.appendChild(document.createTextNode(item.rest));
    }
    ul.appendChild(li);
  }
  fmtCard.appendChild(ul);
  div.appendChild(fmtCard);

  div.appendChild(el('h2', { className: 'section-label section-label--spaced' }, u.chooseLabel));

  for (const n of [1, 2, 3]) {
    const card = el('div', { className: 'card card--tight' });
    card.appendChild(el('h3', { className: 'exam-picker-title' }, u.examTitle(n)));
    card.appendChild(el('div', { className: 'muted exam-picker-desc' }, u.examDesc[n]));
    const btnRow = el('div', { className: 'btn-row-wrap' });
    for (let i = 0; i < 3; i++) {
      const letter = ['A', 'B', 'C'][i];
      btnRow.appendChild(
        el(
          'button',
          {
            className: 'wording-btn',
            onClick: () => {
              const exam = buildExam(n, i);
              if (state.timerHandle) clearInterval(state.timerHandle);
              state.examConfig = { examNumber: n, variant: i };
              state.exam = exam;
              state.answers = {};
              state.current = 0;
              state.submitted = false;
              state.reviewing = false;
              state.timeLeft = EXAM_DURATION;
              startExamTimer();
              setState({});
              scrollExamIntoView();
            },
          },
          u.wordingBtn(letter),
        ),
      );
    }
    card.appendChild(btnRow);
    div.appendChild(card);
  }

  div.appendChild(el('div', { className: 'tip-text tip-text--sm' }, u.pickerTip));
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
};
