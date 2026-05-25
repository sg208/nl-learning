# Copilot instructions (NL Learning)

Full docs: `README.md` for setup and commands, `ARCHITECTURE.md` for system design and deploy, `PROJECT.md` for stack, paths, and conventions.

## Stack

Astro 6 static site, Tailwind v4, English at `/`, Dutch at `/nl/...`, KNM vanilla TS app in `src/scripts/knm/`, PWA via `public/sw.js`, deploy on `main` through GitHub Actions to Bunny CDN.

## Key paths

- `src/pages/` routes
- `src/scripts/knm/` KNM client app
- `src/data/knm/` question bank and study content
- `src/styles/knm/` KNM-specific styles
- `.cursor/skills/` repo-local agent skills
- `.cursor/rules/` repo-local Cursor rules
- `src/i18n/legal/` legal copy; ask before editing

## Conventions

- Read `PROJECT.md` first; open `ARCHITECTURE.md` or `README.md` only when the task needs them.
- WCAG 2.1 / 2.2 AA; KNM user content uses text nodes, not `innerHTML`.
- No `enum`; no `any` without a short comment; prefer arrow functions for non-trivial helpers and handlers.
- Keep files around 120 lines when practical; run `npm run fix` before pushing.

## Branches

- `develop` is the integration branch.
- `main` is the production deploy branch.
