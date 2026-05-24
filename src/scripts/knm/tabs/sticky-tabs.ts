import { getRoot } from '../root';
import { state } from '../state';
import { MOBILE_TAB_NAV } from '../types';
import { closeNavSheet } from './nav-sheet';
import {
  focusTabAfterRender,
  setFocusTabAfterRender,
  setStickyTabsVisible,
  setStickyTabsResizeObserver,
  setTabNavMedia,
  setTabsObserver,
  stickyTabsVisible,
  tabNavMedia,
  tabsObserver,
  stickyTabsResizeObserver,
} from './tab-state';
import { isMobileTabNav } from './nav-sheet';

const getSiteHeaderHeight = (): number => {
  const header = document.querySelector('body > header');
  return header?.getBoundingClientRect().height ?? 72;
};

const isHeaderInnerInView = (headerInner: Element, siteTop: number): boolean =>
  headerInner.getBoundingClientRect().bottom > siteTop;

const syncTabNavA11y = (stickyVisible: boolean): void => {
  const inlineNav = getRoot().querySelector('.tab-nav-inline');
  const stickyBar = getRoot().querySelector<HTMLElement>('.tabs-sticky');
  const panel = document.getElementById('knm-tabpanel');
  if (!inlineNav || !stickyBar || !panel) return;

  setStickyTabsVisible(stickyVisible);
  stickyBar.hidden = !stickyVisible;
  stickyBar.setAttribute('aria-hidden', stickyVisible ? 'false' : 'true');
  inlineNav.setAttribute('aria-hidden', stickyVisible ? 'true' : 'false');

  if (isMobileTabNav()) {
    panel.setAttribute('aria-labelledby', stickyVisible ? 'knm-nav-sticky' : 'knm-nav-inline');
    for (const trigger of getRoot().querySelectorAll<HTMLButtonElement>('.tab-select-trigger')) {
      const inSticky = Boolean(trigger.closest('.tabs-sticky'));
      trigger.disabled = stickyVisible ? !inSticky : inSticky;
    }
    for (const tablist of getRoot().querySelectorAll<HTMLElement>('.tabs-desktop')) {
      tablist.setAttribute('aria-hidden', 'true');
    }
    return;
  }

  for (const trigger of getRoot().querySelectorAll<HTMLButtonElement>('.tab-select-trigger')) {
    trigger.disabled = true;
  }
  for (const tablist of getRoot().querySelectorAll<HTMLElement>('.tabs-desktop')) {
    tablist.removeAttribute('aria-hidden');
  }

  panel.setAttribute(
    'aria-labelledby',
    stickyVisible ? `knm-tab-sticky-${state.tab}` : `knm-tab-${state.tab}`,
  );

  for (const btn of getRoot().querySelectorAll<HTMLButtonElement>('.tab-btn')) {
    const inSticky = Boolean(btn.closest('.tabs-sticky'));
    const selected = btn.getAttribute('aria-selected') === 'true';
    if (stickyVisible) {
      btn.tabIndex = inSticky && selected ? 0 : -1;
      if (inSticky) btn.setAttribute('aria-controls', 'knm-tabpanel');
      else btn.removeAttribute('aria-controls');
    } else {
      btn.tabIndex = !inSticky && selected ? 0 : -1;
      if (!inSticky) btn.setAttribute('aria-controls', 'knm-tabpanel');
      else btn.removeAttribute('aria-controls');
    }
  }
};

export const setupStickyTabs = (): void => {
  tabsObserver?.disconnect();
  const headerInner = getRoot().querySelector('.header-inner');
  const stickyBar = getRoot().querySelector<HTMLElement>('.tabs-sticky');
  if (!headerInner || !stickyBar) return;

  const siteTop = getSiteHeaderHeight();
  document.documentElement.style.setProperty('--site-header-height', `${siteTop}px`);
  getRoot().style.setProperty('--knm-sticky-top', `${siteTop}px`);
  stickyBar.style.setProperty('--knm-sticky-top', `${siteTop}px`);

  const observer = new IntersectionObserver(
    ([entry]) => {
      syncTabNavA11y(!entry.isIntersecting);
    },
    { rootMargin: `-${siteTop}px 0px 0px 0px`, threshold: 0 },
  );
  observer.observe(headerInner);
  setTabsObserver(observer);
  syncTabNavA11y(!isHeaderInnerInView(headerInner, siteTop));
};

const handleTabNavViewportChange = (): void => {
  closeNavSheet();
  setupStickyTabs();
};

export const bindTabNavLayout = (): void => {
  const header = document.querySelector('body > header');
  if (!header) return;
  stickyTabsResizeObserver?.disconnect();
  const resizeObserver = new ResizeObserver(() => setupStickyTabs());
  resizeObserver.observe(header);
  setStickyTabsResizeObserver(resizeObserver);

  tabNavMedia?.removeEventListener('change', handleTabNavViewportChange);
  const media = window.matchMedia(MOBILE_TAB_NAV);
  media.addEventListener('change', handleTabNavViewportChange);
  setTabNavMedia(media);
};

export const focusTabAfterRenderIfNeeded = (): void => {
  if (!focusTabAfterRender) return;
  if (isMobileTabNav()) {
    document.getElementById(stickyTabsVisible ? 'knm-nav-sticky' : 'knm-nav-inline')?.focus();
  } else {
    const prefix = stickyTabsVisible ? 'knm-tab-sticky' : 'knm-tab';
    document.getElementById(`${prefix}-${focusTabAfterRender}`)?.focus();
  }
  setFocusTabAfterRender(null);
};
