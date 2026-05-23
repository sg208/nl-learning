import { saveLocaleHandoff, consumeLocaleHandoff, restoreScroll } from '~/lib/knm-session';

document.addEventListener(
  'click',
  (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
      '[data-locale-switch]',
    );
    if (!link || link.getAttribute('aria-current') === 'true') return;

    saveLocaleHandoff();

    const href = link.getAttribute('href');
    if (href && window.location.hash) {
      link.href = `${href}${window.location.hash}`;
    }
  },
  true,
);

const handoff = consumeLocaleHandoff();
if (handoff && !document.getElementById('knm-app')) {
  restoreScroll(handoff.scrollY);
}
