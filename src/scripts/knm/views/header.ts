import { el } from '../dom/el';
import { t } from '../ui-strings';
import { buildTabNav } from '../tabs/tab-nav';

export const renderHeader = (): HTMLDivElement => {
  const u = t();
  const wrap = el('div', { className: 'header' });
  const inner = el('div', { className: 'header-inner' });
  const top = el('div', { className: 'header-top' });

  const titleDiv = el('div', { className: 'header-title' });
  titleDiv.appendChild(el('div', { className: 'tagline' }, u.tagline));
  titleDiv.appendChild(el('h1', { className: 'app-title' }, u.appTitle));
  titleDiv.appendChild(el('div', { className: 'subtitle' }, u.subtitle));
  top.appendChild(titleDiv);

  inner.appendChild(top);
  inner.appendChild(buildTabNav('inline'));
  wrap.appendChild(inner);
  return wrap;
};
