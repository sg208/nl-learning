# design.md

<!-- enggflo -->

- SCOPE: agent summary of architecture. Human long-form → `ARCHITECTURE.md`.

## Architecture

- **SHAPE**: Astro 7 static site, `output: 'static'` (`astro.config.mjs:16`). No server code, no runtime API.
- **I18N**: EN at `/`, NL at `/nl/...`; `prefixDefaultLocale: false` (`astro.config.mjs:18-24`). Sitemap alternates `en` / `nl-NL` (`astro.config.mjs:26-34`).
- **KNM APP**: shell `src/pages/knm/index.astro` → `KnmPage.astro` → `#knm-app` (`src/components/KnmPage.astro:47`) mounted by `src/scripts/knm/index.ts`; views in `src/scripts/knm/views/`, orchestrated by `src/scripts/knm/render.ts`.
- **LEGAL PAGES**: about · accessibility · privacy · terms · disclaimer, EN + NL, each a thin page over `LegalPage.astro` (`src/pages/privacy.astro:10`); copy in `src/i18n/legal/`.
- **FOOTER**: `footerLinks` (`src/config/site.ts:33`) + GitHub repo link `repoUrl` (`src/config/site.ts:17`, `src/components/Footer.astro:36`). Covered by `e2e/site-legal.spec.ts`.
- **PWA**: `public/sw.js` versioned caches (`public/sw.js:1-3`); navigations network-first with `/offline` fallback (`public/sw.js:36`, `public/sw.js:60`).

## Data flow

1. Build → `src/data/knm/` typed modules bundled into client JS → `dist/`.
2. Browser → `#knm-app` renders via `el()` text nodes (`src/scripts/knm/dom/el.ts:48`).
3. Exam state + EN/NL handoff → `sessionStorage` (`src/lib/knm-session.ts:43`, `src/lib/knm-session.ts:63`).
4. Offline → service worker serves the cached `/offline` notice (pages are network-only).

## Hosting

| target                                            | config                                                                                                                          | trigger                    | serves live site |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------------- |
| Cloudflare Worker, `https://nl-learning.engg.app` | `wrangler.jsonc` (assets `dist`, `404-page`, `drop-trailing-slash`, custom domain, `workers_dev: false`, `preview_urls: false`) | `pnpm run deploy` (manual) | yes              |

- RETIRED: Vercel · Netlify · Railway · Cloudflare Pages · Bunny CDN · engg.me. NEVER document them as hosts.
- DEPLOY ENV: `wrangler` v4 (devDependency) · `CLOUDFLARE_API_TOKEN` · `CLOUDFLARE_ACCOUNT_ID` (names only).

## Key decisions

- Static build, content bundled at build time. WHY: offline-first PWA, no backend to run. `astro.config.mjs:16`
- `SITE_URL` required for production build. WHY: canonical URLs, OG and sitemap depend on it. `astro.config.mjs:7-11`
- Vanilla TS KNM app, text nodes only. WHY: no framework runtime; blocks HTML injection. `src/scripts/knm/dom/el.ts:48`
- `sessionStorage` only, no cookies/analytics. WHY: privacy page states no tracking (`src/i18n/legal/privacy.ts`). `src/lib/knm-session.ts:43`
- Cloudflare Worker static assets as sole live host. WHY: single host on `engg.app` DNS; other hosts retired. `wrangler.jsonc:8`
