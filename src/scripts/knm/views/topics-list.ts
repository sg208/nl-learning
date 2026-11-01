import { STUDY_NOTES } from '~/data/knm/study-notes';
import { TOPICS } from '~/data/knm/topics';
import { getKnmLang, getTopicLabel } from '~/lib/knm-content';

import { el } from '../dom/el';
import { setState } from '../set-state';
import { t } from '../ui-strings';

export const renderTopicsList = (): HTMLDivElement => {
  const u = t();
  const lang = getKnmLang();
  const div = el('div');
  div.appendChild(el('p', { className: 'intro-text' }, u.topicsIntro));

  for (const topic of TOPICS) {
    const priority = u.priorityLabels[topic.id];
    const btn = el('button', {
      className: 'list-card-btn',
      dataset: { topic: topic.id },
      onClick: () => setState({ selectedTopic: topic, scrollToNoteHeading: null }),
    });
    btn.appendChild(el('span', { className: 'swatch', ariaHidden: 'true' }));
    const info = el('div', { className: 'list-card-info' });
    const titleRow = el('div', { className: 'title-row' });
    titleRow.appendChild(el('span', { className: 'list-card-title' }, getTopicLabel(topic, lang)));
    const isMostTested = topic.id === 'gezondheid';
    titleRow.appendChild(
      el(
        'span',
        { className: 'priority-badge' + (isMostTested ? ' priority-badge--top' : '') },
        priority,
      ),
    );
    info.appendChild(titleRow);
    info.appendChild(
      el(
        'div',
        { className: 'muted list-card-desc' },
        u.topicsSubtitle(STUDY_NOTES[topic.id].length),
      ),
    );
    btn.appendChild(info);
    btn.appendChild(el('span', { className: 'list-card-chevron', ariaHidden: 'true' }, '→'));
    div.appendChild(btn);
  }
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
};
