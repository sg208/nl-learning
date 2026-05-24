import type { TabId } from '../types';

export let focusTabAfterRender: TabId | null = null;
export let stickyTabsVisible = false;
export let tabsObserver: IntersectionObserver | null = null;
export let stickyTabsResizeObserver: ResizeObserver | null = null;
export let tabNavMedia: MediaQueryList | null = null;
export let navSheetTriggerId: string | null = null;

export const setFocusTabAfterRender = (tab: TabId | null): void => {
  focusTabAfterRender = tab;
};

export const setStickyTabsVisible = (visible: boolean): void => {
  stickyTabsVisible = visible;
};

export const setNavSheetTriggerId = (id: string | null): void => {
  navSheetTriggerId = id;
};

export const setTabsObserver = (observer: IntersectionObserver | null): void => {
  tabsObserver = observer;
};

export const setStickyTabsResizeObserver = (observer: ResizeObserver | null): void => {
  stickyTabsResizeObserver = observer;
};

export const setTabNavMedia = (media: MediaQueryList | null): void => {
  tabNavMedia = media;
};
