import { el } from '../dom/el';
import { resetTabViewState } from '../exam-engine';
import { t } from '../ui-strings';
import type { TabId } from '../types';

export const renderHome = (): HTMLDivElement => {
  const u = t();
  const div = el('div');

  const statsCard = el('div', { className: 'card card--spaced' });
  statsCard.appendChild(el('h2', { className: 'section-label' }, u.examFacts));
  const grid = el('div', { className: 'grid4' });
  const stats = [
    { v: '40', l: u.statQuestions },
    { v: '45', l: u.statMinutes },
    { v: '26', l: u.statPass },
    { v: '9', l: u.statVersions },
  ];
  for (const s of stats) {
    const cell = el('div', { className: 'text-center' });
    cell.appendChild(el('div', { className: 'stat-value' }, s.v));
    cell.appendChild(el('div', { className: 'muted stat-label' }, s.l));
    grid.appendChild(cell);
  }
  statsCard.appendChild(grid);
  div.appendChild(statsCard);

  const actions = [
    { title: u.cardTopicsTitle, desc: u.cardTopicsDesc, tab: 'topics' as TabId },
    { title: u.cardWhoTitle, desc: u.cardWhoDesc, tab: 'whowhat' as TabId },
    { title: u.cardExamTitle, desc: u.cardExamDesc, tab: 'exam' as TabId },
  ];
  for (const a of actions) {
    const btn = el('button', {
      className: 'list-card-btn',
      dataset: { swatch: a.tab },
      onClick: () => resetTabViewState(a.tab),
    });
    btn.appendChild(el('span', { className: 'swatch', ariaHidden: 'true' }));
    const info = el('div', { className: 'list-card-info' });
    info.appendChild(el('div', { className: 'list-card-title' }, a.title));
    info.appendChild(el('div', { className: 'muted list-card-desc' }, a.desc));
    btn.appendChild(info);
    btn.appendChild(el('span', { className: 'list-card-chevron', ariaHidden: 'true' }, '→'));
    div.appendChild(btn);
  }

  div.appendChild(el('div', { className: 'tip-text' }, u.homeTip));
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
};
