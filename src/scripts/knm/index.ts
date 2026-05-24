import { bindLocaleHandoff } from '~/scripts/locale-handoff';

import { refreshExamTopicLabels, startExamTimer } from './exam-engine';
import { render } from './render';
import { applyKnmSnapshot, getKnmSnapshot } from './state';
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
render();
bindTabNavLayout();
setKnmSnapshotReader(getKnmSnapshot);
persistKnmLiveSession(getKnmSnapshot());
if (handoff) {
  restoreScroll(handoff.scrollY);
  requestAnimationFrame(() => setupStickyTabs());
}
