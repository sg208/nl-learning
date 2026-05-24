import { persistKnmLiveSession, setKnmSnapshotReader } from '~/lib/knm-session';

import { render } from './render';
import { getKnmSnapshot, state } from './state';
import { syncKnmRoute } from './sync-route';
import type { StatePatch } from './types';

export const setState = (patch: StatePatch): void => {
  Object.assign(state, patch);
  render();
  setKnmSnapshotReader(getKnmSnapshot);
  persistKnmLiveSession(getKnmSnapshot());
  syncKnmRoute(getKnmSnapshot(), patch);
};
