---
name: knm-e2e
description: Add or debug Playwright E2E tests for the KNM vanilla TS app on Astro static preview.
---

# KNM E2E (Playwright)

Use when adding navigation/UI coverage for `#knm-app`. Data and pure logic belong in Vitest under `src/`.

## Commands

```bash
SITE_URL=http://127.0.0.1:4173 npm run build   # optional if preview server already built
npm run test:e2e                               # starts preview via playwright.config webServer
npm run test:e2e:ui                            # local debug UI
npm test                                       # Vitest unit tests (run alongside E2E)
npm run check                                  # astro check + tsc
```

- **baseURL:** `http://127.0.0.1:4173` (see `playwright.config.ts`)
- **Build:** `webServer` runs `SITE_URL=<baseURL> npm run build && npm run preview:e2e`
- **CI:** `.github/workflows/e2e.yml` on PRs to `develop` (GitHub Actions)

## URL patterns

| Locale | Path      | Hash examples                                               |
| ------ | --------- | ----------------------------------------------------------- |
| EN     | `/knm`    | `#topics`, `#topics/werk`, `#whowhat`, `#exam`, `#exam/1/a` |
| NL     | `/nl/knm` | same hash segments                                          |

Locale switch: `[data-locale-switch]` links; KNM app appends current hash on click (`locale-handoff.ts`).

## Selectors

Prefer **roles and accessible names** — avoid CSS class assertions.

- App root: `#knm-app`, panel: `#knm-tabpanel` (`role="tabpanel"`)
- Tab list: `getByRole('tablist', { name: 'KNM sections' })` (NL: `KNM onderdelen`)
- Tabs: `getByRole('tab', { name: /Topics/i, selected: true })`
- Shared helpers: `e2e/helpers/knm.ts` — `gotoKnm`, `expectKnmTab`, `switchLocale`

**Do not** assert on `innerHTML`. Use visible text or ARIA roles only.

## Vitest vs Playwright

| Change                                                          | Tool                                             |
| --------------------------------------------------------------- | ------------------------------------------------ |
| Hash parse/build, exam engine, content maps, session validation | Vitest (`src/lib/`, `src/scripts/knm/*.test.ts`) |
| Tab navigation, hash deep links, locale switch, exam picker UI  | Playwright (`e2e/`)                              |

## New spec template

```typescript
import { test, expect } from '@playwright/test';
import { gotoKnm, expectKnmTab } from './helpers/knm';

test('describe behavior', async ({ page }) => {
  await gotoKnm(page, { hash: 'topics' });
  await expectKnmTab(page, 'topics');
  await expect(page.getByText('…')).toBeVisible();
});
```

## Flakes

Wait for `#knm-tabpanel` content after navigation (`gotoKnm` already waits). Avoid fixed `sleep`. Retry trace: `trace: 'on-first-retry'` in config.

## Maintenance

- New KNM tab or hash segment → update `src/lib/knm-route.test.ts` **and** add one E2E smoke case.
- New user-facing flow → extend helpers before duplicating goto/wait logic.
