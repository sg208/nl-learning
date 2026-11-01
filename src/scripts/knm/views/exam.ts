import { announceKnm } from '../dom/announce';
import { el } from '../dom/el';
import { formatTimeLeft, stopExamTimer } from '../exam-engine';
import { setState } from '../set-state';
import { state } from '../state';
import { EXAM_DURATION } from '../types';
import { t } from '../ui-strings';
import { renderResults } from './results';

export const renderExam = (): HTMLDivElement => {
  if (state.submitted) return renderResults();
  const u = t();
  const { exam, answers, current, timeLeft, examConfig } = state;
  if (!exam || !examConfig) return el('div');

  const q = exam[current];
  const variantLetter = ['A', 'B', 'C'][examConfig.variant];
  const div = el('div');

  const topBar = el('div', { className: 'exam-top-bar' });
  topBar.appendChild(
    el(
      'button',
      {
        className: 'back-btn',
        onClick: () => {
          stopExamTimer();
          setState({
            examConfig: null,
            exam: null,
            submitted: false,
            answers: {},
            current: 0,
            timeLeft: EXAM_DURATION,
            timerHandle: null,
          });
        },
      },
      u.stopBtn,
    ),
  );
  const rightSide = el('div', { className: 'exam-top-right' });
  rightSide.appendChild(
    el('span', { className: 'exam-meta' }, u.examLabel(examConfig.examNumber, variantLetter)),
  );
  rightSide.appendChild(
    el(
      'span',
      {
        id: 'timer-display',
        className: 'timer-display' + (timeLeft < 300 ? ' warning' : ''),
      },
      formatTimeLeft(timeLeft),
    ),
  );
  topBar.appendChild(rightSide);
  div.appendChild(topBar);

  const navGrid = el('div', { className: 'nav-grid' });
  for (let i = 0; i < exam.length; i++) {
    const isAnswered = answers[i] != null;
    const cls = 'nav-btn' + (isAnswered ? ' answered' : '') + (i === current ? ' current' : '');
    const navLabel = u.questionLabel(i + 1) + (isAnswered ? `, ${u.answeredLabel}` : '');
    navGrid.appendChild(
      el(
        'button',
        {
          id: `knm-exam-nav-${i}`,
          className: cls,
          ariaLabel: navLabel,
          ariaCurrent: i === current ? 'true' : undefined,
          onClick: () => setState({ current: i }),
        },
        String(i + 1),
      ),
    );
  }
  div.appendChild(navGrid);

  const meta = el('p', { className: 'question-meta', dataset: { topic: q.topic } });
  meta.appendChild(el('span', { className: 'swatch', ariaHidden: 'true' }));
  meta.appendChild(document.createTextNode(`${q.topicLabel} · ${u.questionLabel(current + 1)}`));
  div.appendChild(meta);

  const qCard = el('div', { className: 'question-card' });
  qCard.appendChild(el('h2', { className: 'question-text' }, q.q));
  div.appendChild(qCard);

  for (let idx = 0; idx < q.options.length; idx++) {
    const isSelected = answers[current] === idx;
    const btn = el('button', {
      id: `knm-exam-option-${idx}`,
      className: 'option-btn' + (isSelected ? ' selected' : ''),
      ariaPressed: String(isSelected),
      onClick: () => {
        const newAnswers = { ...state.answers, [state.current]: idx };
        setState({ answers: newAnswers });
      },
    });
    btn.appendChild(
      el('span', { className: 'option-letter', ariaHidden: 'true' }, String.fromCharCode(65 + idx)),
    );
    btn.appendChild(el('span', { className: 'option-text' }, q.options[idx]));
    div.appendChild(btn);
  }

  const navBtns = el('div', { className: 'row-btns exam-nav-btns' });
  navBtns.appendChild(
    el(
      'button',
      {
        id: 'knm-exam-prev',
        className: 'half-btn half-btn--outline',
        disabled: current === 0,
        onClick: () => {
          if (current > 0) setState({ current: current - 1 });
        },
      },
      u.prevBtn,
    ),
  );
  navBtns.appendChild(
    el(
      'button',
      {
        id: 'knm-exam-next',
        className: 'half-btn half-btn--outline',
        disabled: current === exam.length - 1,
        onClick: () => {
          if (current < exam.length - 1) setState({ current: current + 1 });
        },
      },
      u.nextBtn,
    ),
  );
  div.appendChild(navBtns);

  div.appendChild(
    el(
      'button',
      {
        className: 'big-btn big-btn--primary',
        onClick: () => {
          stopExamTimer();
          setState({ submitted: true, timerHandle: null });
          const score = exam.reduce(
            (acc, question, index) => acc + (answers[index] === question.answer ? 1 : 0),
            0,
          );
          announceKnm(`${score} / 40 — ${score >= 26 ? u.passed : u.failed}`);
        },
      },
      u.submitBtn(Object.keys(answers).length),
    ),
  );

  div.appendChild(el('div', { className: 'spacer' }));
  return div;
};
