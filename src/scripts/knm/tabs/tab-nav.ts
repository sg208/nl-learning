import { el } from '../dom/el';
import { resetTabViewState } from '../exam-engine';
import { state } from '../state';
import { t } from '../ui-strings';
import { TAB_IDS, type TabId } from '../types';
import { openNavSheet } from './nav-sheet';
import { setFocusTabAfterRender } from './tab-state';
import { getTabDefs } from './tab-types';

const handleTabListKeydown = (event: KeyboardEvent): void => {
  const currentIndex = TAB_IDS.indexOf(state.tab);
  if (currentIndex === -1) return;

  let nextIndex: number | null = null;
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowUp':
      nextIndex = currentIndex === 0 ? TAB_IDS.length - 1 : currentIndex - 1;
      break;
    case 'ArrowRight':
    case 'ArrowDown':
      nextIndex = currentIndex === TAB_IDS.length - 1 ? 0 : currentIndex + 1;
      break;
    case 'Home':
      nextIndex = 0;
      break;
    case 'End':
      nextIndex = TAB_IDS.length - 1;
      break;
    default:
      return;
  }

  event.preventDefault();
  const nextTab = TAB_IDS[nextIndex];
  setFocusTabAfterRender(nextTab);
  resetTabViewState(nextTab);
};

const buildTabDropdown = (mode: 'inline' | 'sticky'): HTMLDivElement => {
  const u = t();
  const triggerId = mode === 'inline' ? 'knm-nav-inline' : 'knm-nav-sticky';
  const current = getTabDefs().find((tb) => tb.id === state.tab);
  const wrap = el('div', {
    className: 'tab-dropdown',
    role: 'navigation',
    ariaLabel: u.tabNavLabel,
  });
  wrap.appendChild(
    el(
      'button',
      {
        id: triggerId,
        type: 'button',
        className: 'tab-select-trigger',
        ariaControls: 'knm-tabpanel',
        ariaHaspopup: 'dialog',
        ariaExpanded: false,
        onClick: () => openNavSheet(triggerId),
      },
      current?.label ?? u.tabHome,
    ),
  );
  return wrap;
};

const buildTabList = (mode: 'inline' | 'sticky'): HTMLDivElement => {
  const u = t();
  const idPrefix = mode === 'inline' ? 'knm-tab' : 'knm-tab-sticky';
  const tabs = el('div', {
    className: 'tabs tabs-desktop',
    role: 'tablist',
    ariaLabel: u.tabNavLabel,
    onKeydown: handleTabListKeydown,
  });
  for (const tb of getTabDefs()) {
    const isSelected = state.tab === tb.id;
    tabs.appendChild(
      el(
        'button',
        {
          type: 'button',
          role: 'tab',
          id: `${idPrefix}-${tb.id}`,
          className: 'tab-btn' + (isSelected ? ' active' : ''),
          ariaSelected: isSelected,
          ariaControls: 'knm-tabpanel',
          tabIndex: isSelected ? 0 : -1,
          onClick: () => {
            if (tb.id !== state.tab) resetTabViewState(tb.id as TabId);
          },
        },
        tb.label,
      ),
    );
  }
  return tabs;
};

export const buildTabNav = (mode: 'inline' | 'sticky'): HTMLDivElement => {
  const nav = el('div', {
    className: mode === 'inline' ? 'tab-nav tab-nav-inline' : 'tab-nav',
  });
  nav.appendChild(buildTabDropdown(mode));
  nav.appendChild(buildTabList(mode));
  return nav;
};

export const renderTabsSticky = (): HTMLDivElement => {
  const wrap = el('div', { className: 'tabs-sticky', hidden: true, ariaHidden: true });
  const inner = el('div', { className: 'tabs-sticky-inner' });
  inner.appendChild(buildTabNav('sticky'));
  wrap.appendChild(inner);
  return wrap;
};
