import { WHO_DOES_WHAT } from '~/data/knm/who-does-what';
import { getKnmLang, getLocalizedText, getWhoLabel } from '~/lib/knm-content';

import { el } from '../dom/el';
import { t } from '../ui-strings';

export const renderWhoDoesWhat = (): HTMLDivElement => {
  const u = t();
  const lang = getKnmLang();
  const div = el('div');
  div.appendChild(el('p', { className: 'muted intro-text' }, u.whoIntro));

  for (const row of WHO_DOES_WHAT) {
    const card = el('div', { className: 'card who-grid-card' });
    card.appendChild(el('span', { className: 'mono red who-label' }, getWhoLabel(row.who, lang)));
    card.appendChild(
      el('span', { className: 'dim body-text' }, getLocalizedText(row.what, row.whatEn, lang)),
    );
    div.appendChild(card);
  }

  const highlight = el('div', { className: 'highlight-box' });
  highlight.appendChild(el('div', { className: 'mono red section-label' }, u.whoHighlight));
  const body = el('div', { className: 'dim body-text' });
  const uwvLine = el('p', { className: 'para-spaced' });
  uwvLine.appendChild(el('strong', { className: 'bold-highlight' }, u.whoUWVBold + ': '));
  uwvLine.appendChild(document.createTextNode(u.whoUWV.replace(u.whoUWVBold + ': ', '')));
  const gpLine = el('p');
  gpLine.appendChild(el('strong', { className: 'bold-highlight' }, u.whoGPBold + ': '));
  gpLine.appendChild(document.createTextNode(u.whoGP.replace(u.whoGPBold + ': ', '')));
  body.appendChild(uwvLine);
  body.appendChild(gpLine);
  highlight.appendChild(body);
  div.appendChild(highlight);
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
};
