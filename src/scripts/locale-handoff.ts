import {
  consumeLocaleHandoff,
  persistLocaleHandoff,
  restoreScroll,
  saveLocaleHandoff,
  type KnmSnapshot,
} from '~/lib/knm-session';

type LocaleHandoffOptions = {
  getKnmSnapshot?: () => KnmSnapshot;
  restoreScrollOnHandoff?: boolean;
  appendHashToHref?: boolean;
};

export const bindLocaleHandoff = (options: LocaleHandoffOptions = {}): void => {
  const { getKnmSnapshot, restoreScrollOnHandoff = false, appendHashToHref = false } = options;

  document.addEventListener(
    'click',
    (event) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        '[data-locale-switch]',
      );
      if (!link || link.getAttribute('aria-current') === 'true') return;

      if (getKnmSnapshot) {
        persistLocaleHandoff(getKnmSnapshot());
      } else {
        saveLocaleHandoff();
      }

      if (appendHashToHref) {
        const href = link.getAttribute('href');
        if (href && window.location.hash) {
          link.href = `${href}${window.location.hash}`;
        }
      }
    },
    true,
  );

  if (!restoreScrollOnHandoff) return;

  const handoff = consumeLocaleHandoff();
  if (handoff && !document.getElementById('knm-app')) {
    restoreScroll(handoff.scrollY);
  }
};
