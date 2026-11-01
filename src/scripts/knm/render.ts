import { el } from './dom/el';
import { getRoot } from './root';
import { state } from './state';
import { closeNavSheet, renderNavSheet } from './tabs/nav-sheet';
import { renderTabsSticky } from './tabs/tab-nav';
import { focusTabAfterRenderIfNeeded, setupStickyTabs } from './tabs/sticky-tabs';
import type { TabId } from './types';
import { renderExam } from './views/exam';
import { renderExamPicker } from './views/exam-picker';
import { renderHeader } from './views/header';
import { renderHome } from './views/home';
import { renderTopicDetail } from './views/topic-detail';
import { renderTopicsList } from './views/topics-list';
import { renderWhoDoesWhat } from './views/who-does-what';

const viewRegistry: Record<TabId, () => HTMLElement> = {
  home: renderHome,
  topics: () => (state.selectedTopic ? renderTopicDetail() : renderTopicsList()),
  whowhat: renderWhoDoesWhat,
  exam: () => (state.examConfig ? renderExam() : renderExamPicker()),
};

// A disabled prev/next button cannot take focus, so hand it to its counterpart.
const focusFallbackIds: Record<string, string> = {
  'knm-exam-prev': 'knm-exam-next',
  'knm-exam-next': 'knm-exam-prev',
};

const restoreFocusById = (focusedId: string | null): void => {
  if (!focusedId || document.activeElement !== document.body) return;
  const target = document.getElementById(focusedId);
  if (target instanceof HTMLButtonElement && target.disabled) {
    const sibling = focusFallbackIds[focusedId];
    document.getElementById(sibling ?? '')?.focus({ preventScroll: true });
    return;
  }
  target?.focus({ preventScroll: true });
};

export const render = (): void => {
  closeNavSheet();
  const root = getRoot();
  const active = document.activeElement;
  const focusedId = active instanceof HTMLElement && root.contains(active) ? active.id : null;
  while (root.firstChild) root.removeChild(root.firstChild);
  root.appendChild(
    el('div', {
      id: 'knm-live',
      className: 'sr-only',
      ariaLive: 'polite',
      ariaAtomic: true,
    }),
  );
  root.appendChild(renderHeader());
  root.appendChild(renderTabsSticky());
  const main = el('div', {
    className: 'main',
    role: 'tabpanel',
    id: 'knm-tabpanel',
    ariaLabelledby: `knm-tab-${state.tab}`,
  });
  main.appendChild(viewRegistry[state.tab]());
  root.appendChild(main);
  root.appendChild(renderNavSheet());
  setupStickyTabs();
  restoreFocusById(focusedId || null);
  focusTabAfterRenderIfNeeded();
};
