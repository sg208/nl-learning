import { STUDY_NOTES } from '~/data/knm/study-notes';
import { getKnmLang, getLocalizedText, getStudyHeading, getTopicLabel } from '~/lib/knm-content';

import { el } from '../dom/el';
import { setState } from '../set-state';
import { state } from '../state';
import { t } from '../ui-strings';

export const renderTopicDetail = (): HTMLDivElement => {
  const topic = state.selectedTopic;
  if (!topic) return el('div');

  const u = t();
  const lang = getKnmLang();
  const div = el('div');
  div.appendChild(
    el(
      'button',
      { className: 'back-btn', onClick: () => setState({ selectedTopic: null }) },
      u.backToTopics,
    ),
  );

  const titleRow = el('div', { className: 'topic-title-row' });
  titleRow.appendChild(el('span', { className: 'topic-icon-lg' }, topic.icon));
  titleRow.appendChild(el('h2', { className: 'topic-heading' }, getTopicLabel(topic, lang)));
  div.appendChild(titleRow);

  for (const n of STUDY_NOTES[topic.id]) {
    const card = el('div', { className: 'card' });
    card.appendChild(
      el(
        'div',
        { className: 'note-heading', style: { color: topic.color } },
        getStudyHeading(n.h, lang),
      ),
    );
    card.appendChild(el('div', { className: 'dim body-text' }, getLocalizedText(n.b, n.bEn, lang)));
    div.appendChild(card);
  }
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
};
