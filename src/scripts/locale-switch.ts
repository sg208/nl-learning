import { bindLocaleHandoff } from '~/scripts/locale-handoff';

if (!document.getElementById('knm-app')) {
  bindLocaleHandoff({ appendHashToHref: true, restoreScrollOnHandoff: true });
}
