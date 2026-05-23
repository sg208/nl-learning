# NL Learning — project overview

Accessible PWA study site for non-Dutch speakers preparing for **KNM** (Kennis van de Nederlandse Maatschappij) and Dutch civic integration.

## Stack

| Layer     | Choice                                                |
| --------- | ----------------------------------------------------- |
| Framework | Astro 6 (static output)                               |
| Styling   | Tailwind CSS v4 (`src/styles/global.css`)             |
| Fonts     | Sora (UI), Literata (body)                            |
| i18n      | EN at `/`, NL at `/nl/...`                            |
| KNM app   | Vanilla TS client renderer (`src/scripts/knm-app.ts`) |
| PWA       | `public/sw.js`, `public/sw-register.js`, web manifest |
| Deploy    | GitHub Actions → Bunny CDN (`main`)                   |

## Branches

- **`develop`** — integration (CodeRabbit, PR target)
- **`main`** — production deploy

## Key paths

- `src/pages/` — routes
- `src/pages/knm/`, `src/pages/nl/knm/` — KNM shell pages
- `src/data/knm/` — question bank, topics, study notes, UI strings
- `src/lib/knm-session.ts` — locale handoff + live session (`sessionStorage`)
- `src/components/LocaleSwitch.astro` — EN/NL pill (header + mobile float)
- `src/i18n/legal.ts` — legal page copy

## Commands

```bash
npm install
npm run dev          # preferred for development (SW cleared on localhost)
SITE_URL=https://example.com npm run build
npm run preview
npm start            # serve dist (static MPA, no SPA rewrite)
npm run check        # astro check + tsc
npm run fix          # eslint --fix + prettier
```

## Environment

- **`SITE_URL`** — required for production builds (canonical, OG, sitemap).

Deploy secrets: see `.github/workflows/deploy.yml`.

## Conventions

- WCAG 2.1 / 2.2 AA targets: large touch targets, contrast, keyboard, skip link, route announcer.
- KNM uses ARIA tabs, live regions for exam feedback, and text-node rendering (no `innerHTML` for user-facing content).
- Legal copy in `src/i18n/legal.ts` — ask before editing privacy/terms/disclaimer wording.
