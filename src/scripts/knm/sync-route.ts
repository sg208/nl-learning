import { buildKnmHash, knmRouteUrl } from '~/lib/knm-route';
import type { KnmSnapshot } from '~/lib/knm-session';

import type { StatePatch } from './types';

let suppressRouteSync = false;

const ROUTE_KEYS = [
  'tab',
  'selectedTopic',
  'examConfig',
  'submitted',
  'reviewing',
  'scrollToNoteHeading',
] as const;

export const isRouteStatePatch = (patch: StatePatch): boolean =>
  ROUTE_KEYS.some((key) => key in patch);

export const syncKnmRoute = (snapshot: KnmSnapshot, patch?: StatePatch): void => {
  if (suppressRouteSync) return;

  const hash = buildKnmHash(snapshot);
  const nextUrl = knmRouteUrl(window.location.pathname, window.location.search, snapshot);
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (currentUrl === nextUrl) return;

  const push =
    patch &&
    isRouteStatePatch(patch) &&
    !('scrollToNoteHeading' in patch && Object.keys(patch).length === 1);

  if (push) {
    window.history.pushState({ knm: hash }, '', nextUrl);
    return;
  }

  window.history.replaceState({ knm: hash }, '', nextUrl);
};

export const runWithoutRouteSync = (action: () => void): void => {
  suppressRouteSync = true;
  try {
    action();
  } finally {
    suppressRouteSync = false;
  }
};

export const bindKnmRouteNavigation = (onNavigate: () => void): void => {
  window.addEventListener('popstate', () => {
    runWithoutRouteSync(onNavigate);
  });
};
