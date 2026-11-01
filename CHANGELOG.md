# Changelog

All notable changes to this project are documented in this file.

## [0.3.1] — 2026-11-01

### Changed

- **Bunny CDN upload removed**: the `.github/workflows/deploy.yml` workflow and its upload scripts are gone. The site is hosted only on the Cloudflare Worker at https://nl-learning.engg.app and deployed with `pnpm run deploy`.
- **URLs without a trailing slash**: the Worker serves pages such as `/privacy` directly and redirects `/privacy/` to them (`html_handling: drop-trailing-slash` in `wrangler.jsonc`).

### Fixed

- **Offline wording**: the privacy pages (English and Dutch), the offline page, the home and about pages and the site description no longer say pages are cached for offline study. The service worker caches styles, scripts, fonts and images plus the `/offline` notice; pages load from the network.
- **Service worker cache**: the cache version is now `nllearn-ing-v3`, so browsers clear the older caches on the next visit.

## [0.3.0] — 2026-11-01

### Added

- **Source link in the footer**: every page links to the GitHub repository ("Source on GitHub", "Broncode op GitHub" in Dutch).

### Changed

- **Live host**: the site runs as a Cloudflare Worker at https://nl-learning.engg.app and is deployed with `pnpm run deploy`. The Bunny CDN workflow (`.github/workflows/deploy.yml`) and its upload scripts are removed, and the Worker serves no-slash URLs directly.
- **Accessibility, privacy and terms pages**: the English and Dutch copy now matches how the site works. There are no cookies or analytics, only `sessionStorage` and the service worker cache, Cloudflare hosts the site, and questions go to GitHub issues. Links on these pages are underlined, and Dutch links to English pages say "(Engels)".

## [0.2.0] — 2026-11-01

### Changed

- **Design refresh**: a calm light theme with a matching dark theme that follows the system setting. Delft-blue accent, Literata headings, larger question and answer text, and body text at AAA contrast in both themes.
- **Home page**: the exam's key numbers open the page, and the three study areas are full-width links. The 404, offline and legal pages use the same layout.
- **Quiz states**: the selected answer shows a filled letter and `aria-pressed`. Answered questions get a border in the question grid and say so in its accessible names. Topic colours no longer carry text.
- **Language switch**: it now sits in the header next to the menu button at every width. The floating mobile pill is gone, so it no longer covers content or focused controls.

### Fixed

- **Focus after answering**: choosing an answer or pressing Previous or Next keeps keyboard focus on that control. Before, the page re-render dropped focus to the top of the document.
- **Focus under sticky bars**: keyboard focus no longer lands on quiz controls hidden behind the site header or the KNM tab bar, and a new exam scrolls back into view below them.
- **Who does what**: no horizontal scroll on 360px screens.
- **Long answers**: answer text wraps instead of overflowing.
- **Footer**: missing spaces in the copyright line.

## [0.1.1] — 2026-10-31

### Breaking changes

- **pnpm replaces npm**: `package-lock.json` is gone and `packageManager` is `pnpm@10.34.8`. Run `pnpm install`; `npm ci` no longer works.
- **Node 22.23.4 or newer**: `engines.node` is now `>=22.23.4`, which Astro 7 requires. `.nvmrc` still names major version 22.

### Added

- **MIT license**: new `LICENSE` file; `package.json` sets `"license": "MIT"`. The README still says this is not an official DUO product.
- **Cursor and Copilot guidance**: repo-local Cursor rules, skills for `PROJECT.md`-first startup and doc maintenance, and `.github/copilot-instructions.md`.
- **Home card E2E coverage**: EN and NL home cards are tested to open the right KNM tabs.

### Changed

- **Astro 7**: upgraded from Astro 6, along with TypeScript 6, ESLint 10, Vitest 5 and jsdom 30. This clears the critical Astro advisory and every high advisory in `pnpm audit`.
- **CI on pnpm**: `deploy.yml` and `e2e.yml` install with `pnpm install --frozen-lockfile`, and every action in `deploy.yml` is pinned to a commit SHA.
- **Shorter docs**: `PROJECT.md` and `README.md` were trimmed, and legal-copy references now point to `src/i18n/legal/`.

### Fixed

- **NL home study cards**: links no longer apply `localizedPath` twice (they pointed to `/nl/nl/knm#…`).
- **Footer**: the duplicate About link is gone from the Legal column; About stays under Learn.
- **E2E preview**: `preview:e2e` passes `--ignore-lock` so Astro 7 keeps the preview server in the foreground for Playwright.

## [0.1.0] — 2026-05-23

### Added

- Astro 6 static site with English (default) and Dutch (`/nl`) routes, JSON-LD, and sitemap i18n.
- Interactive KNM study app: home dashboard, eight topic study notes, who-does-what reference, and timed mock exams (3 sets × 3 wording variants).
- PWA manifest, service worker (network-first HTML; localhost auto-unregister for dev), and offline fallback page.
- Legal pages (about, accessibility, privacy, terms, disclaimer) in EN and NL.
- Locale switcher with session handoff (preserves KNM tab, topic, and in-progress exam across EN/NL).
- Mobile floating locale pill; header locale switch on `md+`.
- Centered home hero, sticky site header, and KNM sub-header aligned to `max-w-6xl`.
- GitHub Actions deploy workflow to Bunny CDN (`main` branch).

### Fixed

- KNM exam timer cleared when leaving the exam tab; live snapshot reader stays in sync for locale handoff.
- KNM page uses a semantic `<h1>`, ARIA tabs pattern, disabled prev/next controls, and live region announcements for submit/timer expiry.
- Service worker no longer caches wrong HTML for all routes in local preview (`serve` without SPA fallback).
- Removed unused `html()` innerHTML helper; allowlisted DOM props in KNM renderer.
- KNM mobile nav uses a bottom-sheet section picker; sticky nav appears only after the header scrolls away; footer no longer overlaps the sticky bar.
- Locale switch restores scroll position instantly (no smooth-scroll animation).

### Changed

- Refactor KNM into modular `src/scripts/knm/` (state, exam engine, tabs, views, render registry) and remove monolithic `knm-app.ts`.
- Split KNM data into per-topic modules (`questions/`, `study-notes/`, `ui/`, `translations.ts`) and legal copy into `src/i18n/legal/`.
- Expand KNM study notes (~90 cards): Eerste stappen per topic, optional mistake tips, and gap-fill content across all eight topics.
- Add `knm-facts.ts` (2026 eigen risico / huurprijsgrens), `question-concept-map.ts`, exam review study-note links, topic coverage badge, and content-quality Vitest guards.
- Split KNM styles into `src/styles/knm/` with view CSS classes replacing inline styles; add shared `KnmPage.astro`, `locale-handoff.ts`, and `site-menu.ts`.
- Harden session restore with `validateKnmSnapshot`; add Vitest for exam engine and snapshot validation; split CDN upload helpers.

- SEO: hreflang alternates (`en`, `nl-NL`, `x-default`), `og:locale:alternate`, and auto `BreadcrumbList` JSON-LD on inner pages via shared `src/lib/seo.ts`.
- Home JSON-LD uses `@graph` with linked `Organization` + `WebSite`; removed invalid `SearchAction` schema.
- Site config, manifest, and PWA icons updated for `nllearn.ing` domain; header wordmark remains NL.Learning.
- KNM home tab label renamed to Overview / Overzicht.
- Added `npm run icons` script to regenerate PWA PNGs from SVG sources.
- Playwright E2E smoke suite (`e2e/`, `npm run test:e2e`): KNM load, hash tabs, topic/exam deep links, EN↔NL locale handoff; preview on port 4173; CI workflow on PRs to `develop`.
- Expand KNM E2E Phase 3: browser history, home cards, topic navigation, exam flow (answer/next/prev, stop, submit via session prefills), review study-note links, keyboard tab nav, axe scan on home; `@axe-core/playwright` dev dep; KNM contrast tweaks for active tab and section labels.
- KNM First steps cards use ordered step lists instead of inline numbered paragraphs.
- KNM URL hash routing syncs tab, topic, exam, and study-note views with the address bar; home page cards link to `#topics`, `#whowhat`, and `#exam`.
