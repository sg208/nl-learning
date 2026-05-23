# NL Learning

Accessible, PWA-ready study site for non-Dutch speakers preparing for **KNM** (Kennis van de Nederlandse Maatschappij) and civic integration in the Netherlands.

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** — system design, data flow, deployment
- **[PROJECT.md](./PROJECT.md)** — stack, repo structure, conventions

## Prerequisites

- Node.js ≥ 20 (see `.nvmrc`)

## Commands

```bash
npm install
npm run dev
SITE_URL=https://your-domain.example npm run build
npm run preview
npm start
npm run check    # astro check + tsc
npm run fix      # eslint --fix + prettier
```

Use `npm run dev` during development (service workers are unregistered on localhost). For production-like local testing, run `npm run build` then `npm start` — do not use SPA fallback mode or stale SW caches will serve the wrong page.

## Environment

| Variable   | When             | Purpose                             |
| ---------- | ---------------- | ----------------------------------- |
| `SITE_URL` | Production build | Canonical URLs, Open Graph, sitemap |

Deploy secrets (names only — see [ARCHITECTURE.md](./ARCHITECTURE.md#deployment)): `SITE_URL`, `BUNNY_STORAGE_ACCESS_KEY`, `BUNNY_API_KEY`, `BUNNY_ZONE_ID`.

## Branches

- **`develop`** — default integration branch (CodeRabbit auto-review)
- **`main`** — production deploy branch (GitHub Actions → Bunny CDN)

## Agent rules

Shared AI tool config lives in [`ai-rules/`](./ai-rules/). After clone:

```bash
git submodule update --init --recursive
```

If the submodule is not configured yet, rules are vendored in `ai-rules/` at the repo root.

## Layout (top level)

- `src/pages/` — routes (English at `/`, Dutch at `/nl/...`)
- `src/data/knm/` — question bank and study content
- `public/` — static assets, service worker, manifest
- `ai-rules/` — Cursor / Claude / Copilot agent rules

## License

Private project. Study content is for educational practice; not an official DUO or government product.
