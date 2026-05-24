import { el } from '../dom/el';
import { buildExam, startExamTimer } from '../exam-engine';
import { setState } from '../set-state';
import { state } from '../state';
import { EXAM_DURATION } from '../types';
import { t } from '../ui-strings';

export const renderExamPicker = (): HTMLDivElement => {
  const u = t();
  const div = el('div');

  const fmtCard = el('div', { className: 'card card--spaced' });
  fmtCard.appendChild(el('div', { className: 'mono red section-label' }, u.formatLabel));
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

  div.appendChild(el('div', { className: 'mono muted section-label' }, u.chooseLabel));

  for (const n of [1, 2, 3]) {
    const card = el('div', { className: 'card card--tight' });
    card.appendChild(el('div', { className: 'exam-picker-title' }, u.examTitle(n)));
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
