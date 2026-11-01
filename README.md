# NL Learning

A free study site for people who don't speak Dutch and are preparing for the **KNM** exam (Kennis van de Nederlandse Maatschappij) and civic integration in the Netherlands. It has study notes, a who-does-what reference and timed mock exams, in English and Dutch, with large text and offline support.

Live: https://nl-learning.engg.app

More detail lives in [ARCHITECTURE.md](./ARCHITECTURE.md) (design, data flow, deployment) and [PROJECT.md](./PROJECT.md) (stack, paths, conventions).

## Stack

Astro 7 (static output), Tailwind CSS v4, a vanilla TypeScript client app for the KNM practice screens, and a service worker for offline use. Vitest for unit tests, Playwright with axe for end-to-end and accessibility tests.

## Run it locally

You need Node.js 22.23.4 or newer (see `.nvmrc`) and pnpm (`corepack enable` picks up the version in `package.json`).

```bash
pnpm install
pnpm run dev
```

The dev server unregisters service workers on localhost. To try offline behaviour, build and serve the output instead:

```bash
SITE_URL=http://localhost:3000 pnpm run build
pnpm start
```

Don't use an SPA fallback when serving `dist/`, or stale service worker caches will serve the wrong page.

## Test and check

```bash
pnpm run check    # astro check + tsc
pnpm run lint
pnpm run format:check
pnpm test         # vitest
pnpm run test:e2e # playwright: builds, previews on port 4173, runs the specs
pnpm run fix      # eslint --fix + prettier
```

## Build

```bash
SITE_URL=https://nl-learning.engg.app pnpm run build
```

`SITE_URL` is required for production builds. Canonical URLs, Open Graph tags and the sitemap all use it.

## Deploy

The live site is a Cloudflare Worker that serves `dist/` as static assets, configured in `wrangler.jsonc`.

```bash
pnpm run deploy
```

This sets `SITE_URL`, builds, and runs `wrangler deploy`. Wrangler 4 is a dev dependency, so you only need `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment.

A separate GitHub Actions workflow (`.github/workflows/deploy.yml`) uploads the build to Bunny CDN on every push to `main`. It is not what serves nl-learning.engg.app. Its secrets are `SITE_URL`, `BUNNY_STORAGE_ACCESS_KEY`, `BUNNY_API_KEY` and `BUNNY_ZONE_ID`.

## Branches

- `develop`: integration branch. Pull requests into it get a CodeRabbit review and the Playwright suite.
- `main`: release branch. Pushes trigger the Bunny CDN workflow.

## Where things are

- `src/pages/`: routes (English at `/`, Dutch at `/nl/...`)
- `src/scripts/knm/`: the KNM practice app
- `src/data/knm/`: question bank and study notes
- `src/i18n/legal/`: text for the about, accessibility, privacy, terms and disclaimer pages
- `public/`: static assets, service worker, manifest

## License

[MIT](./LICENSE) © 2026 Syailendra Ginting.

The study content is for practice. It is not an official DUO or government product.
