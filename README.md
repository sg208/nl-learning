# NL Learning

Accessible, PWA-ready study site for non-Dutch speakers preparing for **KNM** (Kennis van de Nederlandse Maatschappij) and civic integration in the Netherlands.

Live at https://nl-learning.engg.app, served by a Cloudflare Worker (static assets) on the sg208 account, configured in `wrangler.jsonc`. `pnpm deploy` sets `SITE_URL`, builds, and runs `wrangler deploy`; it needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment.

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** — system design, data flow, deployment
- **[PROJECT.md](./PROJECT.md)** — stack, repo structure, conventions

## Prerequisites

- Node.js ≥ 22.23.4 (see `.nvmrc`)
- pnpm (version pinned in `package.json` `packageManager`; `corepack enable`)

## Commands

```bash
pnpm install
pnpm run dev
SITE_URL=https://your-domain.example pnpm run build
pnpm run preview
pnpm start
pnpm run check    # astro check + tsc
pnpm test         # vitest
pnpm run test:e2e # playwright (build + preview on port 4173)
pnpm run fix      # eslint --fix + prettier
```

Use `pnpm run dev` during development (service workers are unregistered on localhost). For production-like local testing, run `pnpm run build` then `pnpm start` — do not use SPA fallback mode or stale SW caches will serve the wrong page.

## Environment

| Variable   | When             | Purpose                             |
| ---------- | ---------------- | ----------------------------------- |
| `SITE_URL` | Production build | Canonical URLs, Open Graph, sitemap |

Deploy secrets (names only — see [ARCHITECTURE.md](./ARCHITECTURE.md#deployment)): `SITE_URL`, `BUNNY_STORAGE_ACCESS_KEY`, `BUNNY_API_KEY`, `BUNNY_ZONE_ID`.

## Branches

- **`develop`** — default integration branch (CodeRabbit auto-review)
- **`main`** — production deploy branch (GitHub Actions → Bunny CDN)

## Layout (top level)

- `src/pages/` — routes (English at `/`, Dutch at `/nl/...`)
- `src/scripts/knm/` — KNM client app (exam UI, tabs, views)
- `src/data/knm/` — question bank and study content
- `public/` — static assets, service worker, manifest

## License

[MIT](./LICENSE) © 2026 Syailendra Ginting.

Study content is for educational practice; not an official DUO or government product.
