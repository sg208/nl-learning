import { getTopicNoteCoverage } from '~/data/knm/question-concept-map';
import { STUDY_NOTES } from '~/data/knm/study-notes';
import type { StudyNote } from '~/data/knm/study-notes/types';
import { getKnmLang, getLocalizedText, getStudyHeading, getTopicLabel } from '~/lib/knm-content';
import { persistKnmLiveSession } from '~/lib/knm-session';

import { el } from '../dom/el';
import { setState } from '../set-state';
import { getKnmSnapshot, state } from '../state';
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
      {
        className: 'back-btn',
        onClick: () => setState({ selectedTopic: null, scrollToNoteHeading: null }),
      },
      u.backToTopics,
    ),
  );

  const titleRow = el('div', { className: 'topic-title-row' });
  titleRow.appendChild(el('span', { className: 'topic-icon-lg' }, topic.icon));
  titleRow.appendChild(el('h2', { className: 'topic-heading' }, getTopicLabel(topic, lang)));
  div.appendChild(titleRow);

  const { covered, total } = getTopicNoteCoverage(topic.id);
  div.appendChild(
    el('p', { className: 'muted exam-coverage-label' }, u.examCoverage(covered, total)),
  );

  for (const n of STUDY_NOTES[topic.id]) {
    const cardClass = n.h === 'Eerste stappen' ? 'card note-first-steps' : 'card';
    const card = el('div', { className: cardClass });
    card.dataset.noteHeading = n.h;
    card.appendChild(
      el(
        'div',
        { className: 'note-heading', style: { color: topic.color } },
        getStudyHeading(n.h, lang),
      ),
    );
    card.appendChild(el('div', { className: 'dim body-text' }, getLocalizedText(n.b, n.bEn, lang)));
    const note = n as StudyNote;
    if (note.tip ?? note.tipEn) {
      const tipText = getLocalizedText(note.tip ?? '', note.tipEn, lang);
      if (tipText) {
        card.appendChild(el('div', { className: 'note-tip' }, `${u.noteTipLabel} ${tipText}`));
      }
    }
    div.appendChild(card);
  }
  div.appendChild(el('div', { className: 'spacer' }));

  const scrollTarget = state.scrollToNoteHeading;
  if (scrollTarget) {
    requestAnimationFrame(() => {
      const card = div.querySelector(`[data-note-heading="${CSS.escape(scrollTarget)}"]`);
      const scrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth';
      card?.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
      state.scrollToNoteHeading = null;
      persistKnmLiveSession(getKnmSnapshot());
    });
  }

  return div;
};
