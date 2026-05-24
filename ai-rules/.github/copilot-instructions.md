# Copilot instructions (NL Learning)

Condensed mirror of PROJECT.md. Full detail: PROJECT.md, ARCHITECTURE.md, README.md.

## Doc map

- Setup & commands → README.md
- System design & deployment → ARCHITECTURE.md
- Stack, paths & conventions → PROJECT.md

## Stack

Astro 6 static, Tailwind v4, EN `/` + NL `/nl/...`, KNM client app in `src/scripts/knm/`, PWA via `public/sw.js`, deploy GitHub Actions → Bunny CDN on `main`.

## Key paths

- `src/pages/` routes; `src/data/knm/questions|study-notes|ui/`; `knm-facts.ts`; `question-concept-map.ts`; `src/lib/knm-session.ts` sessionStorage; `src/lib/knm-route.ts` hash deep links
- `src/i18n/legal/` legal copy — ask before editing

## Conventions

- WCAG 2.1/2.2 AA; KNM uses text nodes not innerHTML; files ≤120 lines (150 soft cap); `npm run fix` before push
- No enum; no any without comment; arrow functions; validate at boundaries only

## Branches

`develop` integration; `main` production deploy.
