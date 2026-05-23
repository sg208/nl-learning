# NL Learning

Accessible, PWA-ready study site for non-Dutch speakers preparing for **KNM** (Kennis van de Nederlandse Maatschappij) and civic integration in the Netherlands.

## Stack

- [Astro](https://astro.build) static output
- Tailwind CSS v4
- JSON-LD structured data
- i18n: English (default) + Dutch (`/nl/...`)
- Service worker + web manifest (offline-friendly)
- WCAG 2.1 / 2.2 Level AA targets (large text, contrast, keyboard support)

## Branches

- **`develop`** — default integration branch (CodeRabbit auto-review)
- **`main`** — production deploy branch (GitHub Actions → Bunny CDN)

## Commands

```bash
npm install
npm run dev
SITE_URL=https://your-domain.example npm run build
npm run preview
npm start
```

Use `npm run dev` during development (service workers are unregistered on localhost). For production-like local testing, run `npm run build` then `npm start` — do not use SPA fallback mode or stale SW caches will serve the wrong page.

## Environment

| Variable   | When             | Purpose                             |
| ---------- | ---------------- | ----------------------------------- |
| `SITE_URL` | Production build | Canonical URLs, Open Graph, sitemap |

Deploy secrets (see `.github/workflows/deploy.yml`): `SITE_URL`, `BUNNY_STORAGE_ACCESS_KEY`, `BUNNY_API_KEY`, `BUNNY_ZONE_ID`.

## Project layout

- `src/pages/` — routes (English at root, Dutch under `/nl`)
- `src/pages/knm/` — interactive KNM study app
- `src/data/knm/` — question bank, topics, study notes (from practice material)
- `src/scripts/knm-app.ts` — client-side KNM UI
- `public/sw.js` — service worker

## License

Private project. Study content is for educational practice; not an official DUO or government product.
