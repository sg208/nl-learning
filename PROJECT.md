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
| KNM app   | Vanilla TS client renderer (`src/scripts/knm-app.ts`) |
| PWA       | `public/sw.js`, `public/sw-register.js`, web manifest |
| Deploy    | GitHub Actions → Bunny CDN (`main`)                   |

## Key paths

| Path | Purpose |
| ---- | ------- |
| `src/pages/` | Astro routes |
| `src/pages/knm/`, `src/pages/nl/knm/` | KNM shell pages |
| `src/data/knm/` | Question bank, topics, study notes, UI strings |
| `src/lib/knm-session.ts` | Locale handoff + live session (`sessionStorage`) |
| `src/lib/knm-content.ts` | Content helpers for KNM data |
| `src/lib/i18n.ts` | Locale types and path helpers |
| `src/components/LocaleSwitch.astro` | EN/NL pill (header + mobile) |
| `src/i18n/legal.ts` | Legal page copy |
| `src/config/site.ts` | Site name, nav, footer links |
| `scripts/upload-to-cdn.mjs` | Production upload + cache purge |
| `ai-rules/` | Shared agent rules (Cursor, Claude, Copilot) |

## Conventions

### TypeScript & structure

- No `enum`; use `const` objects or string unions.
- No `any` without a short inline comment.
- Prefer arrow functions for handlers and helpers.
- Keep files ≤ ~120 lines; split by responsibility.
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
- **Always ask before editing** legal wording in `src/i18n/legal.ts` or legal page routes.

### Agent workflow

- Read this file first for stack, paths, and conventions.
- Read [ARCHITECTURE.md](./ARCHITECTURE.md) for flows, PWA, and deploy.
- Read [README.md](./README.md) for scripts and env vars.
- Tool-specific lint/security/a11y rules: `ai-rules/.cursor/rules/`.
