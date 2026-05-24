import { announceKnm } from '../dom/announce';
import { el } from '../dom/el';
import { stopExamTimer } from '../exam-engine';
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
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
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
    el(
      'span',
      { className: 'mono muted exam-meta' },
      u.examLabel(examConfig.examNumber, variantLetter),
    ),
  );
  rightSide.appendChild(
    el(
      'span',
      {
        id: 'timer-display',
        className: 'mono timer-display' + (timeLeft < 300 ? ' warning' : ''),
      },
      `⏱ ${minutes}:${String(seconds).padStart(2, '0')}`,
    ),
  );
  topBar.appendChild(rightSide);
  div.appendChild(topBar);

  const navGrid = el('div', { className: 'nav-grid' });
  for (let i = 0; i < exam.length; i++) {
    const cls = 'nav-btn' + (i === current ? ' current' : answers[i] != null ? ' answered' : '');
    navGrid.appendChild(
      el(
        'button',
        {
          className: cls,
          ariaLabel: u.questionLabel(i + 1),
          ariaCurrent: i === current ? 'true' : undefined,
          onClick: () => setState({ current: i }),
        },
        String(i + 1),
      ),
    );
  }
  div.appendChild(navGrid);

  div.appendChild(
    el(
      'div',
      {
        className: 'mono question-meta',
        style: { color: q.topicColor },
      },
      q.topicLabel.toUpperCase() + ' · ' + u.questionLabel(current + 1),
    ),
  );

  const qCard = el('div', { className: 'card card--tight' });
  qCard.appendChild(el('p', { className: 'question-text' }, q.q));
  div.appendChild(qCard);

  for (let idx = 0; idx < q.options.length; idx++) {
    const isSelected = answers[current] === idx;
    const btn = el('button', {
      className: 'option-btn' + (isSelected ? ' selected' : ''),
      onClick: () => {
        const newAnswers = { ...state.answers, [state.current]: idx };
        setState({ answers: newAnswers });
      },
    });
    btn.appendChild(
      el('span', { className: 'mono muted option-letter' }, String.fromCharCode(65 + idx) + '.'),
    );
    btn.appendChild(document.createTextNode(q.options[idx]));
    div.appendChild(btn);
  }

  const navBtns = el('div', { className: 'row-btns exam-nav-btns' });
  navBtns.appendChild(
    el(
      'button',
      {
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
        className: 'big-btn big-btn--danger',
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
