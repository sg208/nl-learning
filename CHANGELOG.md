# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Fixed

- NL site home study cards no longer double-apply `localizedPath` (broken `/nl/nl/knm#…` links).
- Remove duplicate About link from footer Legal column (About remains under Learn).

### Added

- E2E coverage for EN and NL site home cards linking into KNM tabs.

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
