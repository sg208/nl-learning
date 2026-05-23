# Changelog

All notable changes to this project are documented in this file.

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
