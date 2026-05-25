import { expect, test } from '@playwright/test';

import { clickKnmTab, expectKnmTab, gotoKnm, type KnmLocale, type KnmTabId } from './helpers/knm';

type HomeCardCase = {
  tab: Exclude<KnmTabId, 'home'>;
  card: RegExp;
  panel: RegExp;
};

const HOME_CARDS: Record<KnmLocale, HomeCardCase[]> = {
  en: [
    { tab: 'topics', card: /Study the 8 topics/i, panel: /Study in this order/i },
    { tab: 'whowhat', card: /Who does what/i, panel: /CRUCIAL DISTINCTION/i },
    { tab: 'exam', card: /Take a mock exam/i, panel: /CHOOSE EXAM \+ WORDING/i },
  ],
  nl: [
    { tab: 'topics', card: /Bestudeer de 8 onderwerpen/i, panel: /Leer in deze volgorde/i },
    { tab: 'whowhat', card: /Wie doet wat/i, panel: /CRUCIAAL ONDERSCHEID/i },
    { tab: 'exam', card: /Doe een oefenexamen/i, panel: /KIES EXAMEN \+ BEWOORDING/i },
  ],
};

for (const locale of ['en', 'nl'] as const) {
  test.describe(`KNM home cards (${locale.toUpperCase()})`, () => {
    for (const { tab, card, panel } of HOME_CARDS[locale]) {
      test(`${tab} card navigates to #${tab}`, async ({ page }) => {
        await gotoKnm(page, { locale });
        await expectKnmTab(page, 'home', locale);

        await page.locator('#knm-tabpanel').getByRole('button', { name: card }).click();
        await expectKnmTab(page, tab, locale);
        await expect(page.getByText(panel)).toBeVisible();

        await clickKnmTab(page, 'home', locale);
        await expectKnmTab(page, 'home', locale);
      });
    }
  });
}
