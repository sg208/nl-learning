# conventions.md

<!-- enggflo -->

- SCOPE: patterns the repo follows that lint/format configs do not enforce. Style/format → `eslint.config.mjs` · `.prettierrc` (`pnpm run fix`).

## Naming

- Files kebab-case for TS (`src/scripts/knm/exam-engine.ts`, `src/lib/knm-session.ts`); PascalCase for Astro components (`src/components/LegalPage.astro`).
- KNM screens → one file per view in `src/scripts/knm/views/`.
- NL routes mirror EN routes under `src/pages/nl/` with the same filename.

## Code

- MUST: arrow functions; NEVER `enum`; `any` only with inline reason (`.cursor/rules/base.mdc`).
- MUST: user-facing KNM content via text nodes (`src/scripts/knm/dom/el.ts:48`); NEVER `innerHTML`.
- Files ~120 lines; split by responsibility (`.cursor/rules/base.mdc`).
- Bilingual strings as `{ en, nl }` records (`src/config/site.ts`).
- Legal copy only in `src/i18n/legal/`; ask before editing wording (`PROJECT.md`).

## Tests

- Unit tests beside source as `*.test.ts` (`src/lib/knm-route.test.ts`).
- E2E in `e2e/*.spec.ts` with axe checks.

## Git

- Conventional-commit subjects: `feat` · `fix` · `chore` · `docs` · `style`, optional scope (`feat(knm):`, `fix(a11y):`) (`git log`).
- Branch off `develop`; `main` = release only; releases as `chore(release): vX.Y.Z` + `CHANGELOG.md` entry.
- `pnpm run fix` before push (`.cursor/rules/base.mdc`).
