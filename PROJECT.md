# NL Learning — project overview

Agent-oriented reference for stack, paths, and conventions.

- **Setup & commands** → [README.md](./README.md)
- **System design & deployment** → [ARCHITECTURE.md](./ARCHITECTURE.md)

## Stack

| Layer     | Choice                                                |
| --------- | ----------------------------------------------------- |
| Framework | Astro 6 (static output)                               |
| Styling   | Tailwind CSS v4 (`src/styles/global.css`)             |
| Fonts     | Sora (UI), Literata (body)                            |
| i18n      | EN at `/`, NL at `/nl/...`                            |
| KNM app   | Vanilla TS client app (`src/scripts/knm/`)            |
| PWA       | `public/sw.js`, `public/sw-register.js`, web manifest |
| Deploy    | GitHub Actions → Bunny CDN (`main`)                   |

## Key paths

| Path                                   | Purpose                                               |
| -------------------------------------- | ----------------------------------------------------- |
| `src/pages/`                           | Astro routes                                          |
| `src/pages/knm/`, `src/pages/nl/knm/`  | KNM routes (via `KnmPage.astro`)                      |
| `src/data/knm/questions/`              | Question bank (per-topic files + `index.ts`)          |
| `src/data/knm/study-notes/`            | Study notes (per-topic files + `index.ts`, ~90 cards) |
| `src/data/knm/knm-facts.ts`            | Year-sensitive amounts (eigen risico, huurprijsgrens) |
| `src/data/knm/question-concept-map.ts` | Question → study-note heading links                   |
| `src/data/knm/ui/`                     | KNM UI strings (`nl.ts`, `en.ts`)                     |
| `src/data/knm/translations.ts`         | EN heading/label maps for study & who-does-what       |
| `src/scripts/knm/`                     | KNM client app (state, exam engine, tabs, views)      |
| `.cursor/skills/`                      | Repo-local agent skills for project workflows         |
| `.cursor/rules/`                       | Repo-local Cursor rules (base, Astro, a11y, security) |
| `src/scripts/locale-handoff.ts`        | Shared locale-switch session handoff                  |
| `src/styles/knm/`                      | KNM scoped CSS (tokens, layout, tabs, exam)           |
| `src/lib/knm-session.ts`               | Locale handoff + live session (`sessionStorage`)      |
| `src/lib/knm-route.ts`                 | KNM hash URL build/parse for tab and view deep links  |
| `src/lib/knm-content.ts`               | KNM locale/topic helpers                              |
| `src/lib/i18n.ts`                      | Locale types and path helpers                         |
| `src/components/KnmPage.astro`         | Shared EN/NL KNM page shell                           |
| `src/components/LocaleSwitch.astro`    | EN/NL pill (header + mobile)                          |
| `src/i18n/legal/`                      | Legal page copy (per-page modules)                    |
| `src/config/site.ts`                   | Site name, nav, footer links                          |
| `scripts/upload-to-cdn.mjs`            | CDN upload orchestrator                               |
| `scripts/collect-files.mjs`            | Recursive dist file collector                         |
| `scripts/upload-batch.mjs`             | Bunny CDN batch upload + purge                        |
| `e2e/`                                 | Playwright E2E (KNM navigation, exam, a11y)           |
| `playwright.config.ts`                 | E2E config (`baseURL` port 4173)                      |

## Conventions

### TypeScript & structure

- No `enum`; use `const` objects or string unions.
- No `any` without a short inline comment.
- Prefer arrow functions for handlers and helpers.
- Keep files ≤ ~120 lines (150 soft cap); split by responsibility.
- Run `npm run fix` before pushing.

### Astro

- Pages in `src/pages/`; shared UI in `src/components/`; layouts in `src/layouts/`.
- Use `~/` path alias (see `tsconfig.json`).
- Prefer static content in `.astro` files; client behavior in `src/scripts/*.ts`.

### Accessibility

- WCAG 2.1 / 2.2 AA: contrast, keyboard, skip link, one `<h1>` per page, logical heading order.
- KNM: ARIA tabs, live regions for exam feedback, text-node rendering (no `innerHTML` for user-facing content).

### Security & legal

- No secrets in source; env vars for build and deploy only.
- **Always ask before editing** legal wording in `src/i18n/legal/` or legal page routes.

### Agent workflow

- Read this file first for stack, paths, and conventions.
- Read matching repo-local skills in `.cursor/skills/` when the task calls for them.
- Repo-local Cursor rules live in `.cursor/rules/`.
- Read [ARCHITECTURE.md](./ARCHITECTURE.md) only for flows, PWA, deploy, or other cross-cutting design work.
- Read [README.md](./README.md) only for scripts, env vars, or onboarding.
