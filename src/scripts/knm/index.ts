import { bindLocaleHandoff } from '~/scripts/locale-handoff';

import { applyRouteFromHash } from './apply-route';
import { refreshExamTopicLabels, startExamTimer } from './exam-engine';
import { render } from './render';
import { applyKnmSnapshot, getKnmSnapshot } from './state';
import { bindKnmRouteNavigation, syncKnmRoute } from './sync-route';
import { bindTabNavLayout, setupStickyTabs } from './tabs/sticky-tabs';

import {
  consumeLocaleHandoff,
  persistKnmLiveSession,
  readKnmLiveSession,
  restoreScroll,
  setKnmSnapshotReader,
  validateKnmSnapshot,
} from '~/lib/knm-session';

bindLocaleHandoff({ getKnmSnapshot: getKnmSnapshot, appendHashToHref: true });

setKnmSnapshotReader(getKnmSnapshot);

const handoff = consumeLocaleHandoff();
const restored = handoff?.knm ?? readKnmLiveSession();
if (restored && validateKnmSnapshot(restored)) {
  applyKnmSnapshot(restored, refreshExamTopicLabels, startExamTimer);
}
applyRouteFromHash();

const handleRouteNavigation = (): void => {
  applyRouteFromHash();
  render();
  setKnmSnapshotReader(getKnmSnapshot);
  persistKnmLiveSession(getKnmSnapshot());
};

bindKnmRouteNavigation(handleRouteNavigation);
render();
bindTabNavLayout();
syncKnmRoute(getKnmSnapshot());
setKnmSnapshotReader(getKnmSnapshot);
persistKnmLiveSession(getKnmSnapshot());
if (handoff) {
  restoreScroll(handoff.scrollY);
  requestAnimationFrame(() => setupStickyTabs());
}
