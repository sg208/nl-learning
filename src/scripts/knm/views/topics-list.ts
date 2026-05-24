import { STUDY_NOTES } from '~/data/knm/study-notes';
import { TOPICS } from '~/data/knm/topics';
import { getKnmLang, getTopicLabel } from '~/lib/knm-content';

import { el } from '../dom/el';
import { setState } from '../set-state';
import { t } from '../ui-strings';

const priorityColor = (priority: string): string => {
  const map: Record<string, string> = {
    'MEEST GETEST': '#e63946',
    'MOST TESTED': '#e63946',
    HOOG: '#2a9d8f',
    HIGH: '#2a9d8f',
    MIDDEL: '#457b9d',
    MEDIUM: '#457b9d',
  };
  return map[priority] ?? '#6d6875';
};

export const renderTopicsList = (): HTMLDivElement => {
  const u = t();
  const lang = getKnmLang();
  const div = el('div');
  div.appendChild(el('p', { className: 'muted intro-text' }, u.topicsIntro));

  for (const topic of TOPICS) {
    const priority = u.priorityLabels[topic.id];
    const pc = priorityColor(priority);
    const btn = el('button', {
      className: 'list-card-btn',
      style: { borderLeftColor: topic.color },
      onClick: () => setState({ selectedTopic: topic, scrollToNoteHeading: null }),
    });
    btn.appendChild(el('span', { className: 'list-card-icon' }, topic.icon));
    const info = el('div', { className: 'list-card-info' });
    const titleRow = el('div', { className: 'title-row' });
    titleRow.appendChild(el('span', { className: 'list-card-title' }, getTopicLabel(topic, lang)));
    const badge = el('span', { className: 'priority-badge' });
    badge.style.setProperty('--badge-color', pc);
    badge.textContent = priority;
    titleRow.appendChild(badge);
    info.appendChild(titleRow);
    info.appendChild(
      el(
        'div',
        { className: 'muted list-card-desc' },
        u.topicsSubtitle(STUDY_NOTES[topic.id].length),
      ),
    );
    btn.appendChild(info);
    btn.appendChild(el('span', { className: 'muted list-card-chevron' }, '›'));
    div.appendChild(btn);
  }
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
};
