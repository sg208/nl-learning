import { expect, test } from '@playwright/test';

import { expectKnmTab, type KnmLocale } from './helpers/knm';

type SiteHomeCard = {
  homePath: string;
  title: RegExp;
  knmLocale: KnmLocale;
  tab: 'exam' | 'topics' | 'whowhat';
};

const SITE_HOME_CARDS: SiteHomeCard[] = [
  {
    homePath: '/',
    title: /KNM mock exams/i,
    knmLocale: 'en',
    tab: 'exam',
  },
  {
    homePath: '/',
    title: /Study notes/i,
    knmLocale: 'en',
    tab: 'topics',
  },
  {
    homePath: '/',
    title: /Who does what/i,
    knmLocale: 'en',
    tab: 'whowhat',
  },
  {
    homePath: '/nl',
    title: /KNM oefenexamens/i,
    knmLocale: 'nl',
    tab: 'exam',
  },
  {
    homePath: '/nl',
    title: /Studienotities/i,
    knmLocale: 'nl',
    tab: 'topics',
  },
  {
    homePath: '/nl',
    title: /Wie doet wat/i,
    knmLocale: 'nl',
    tab: 'whowhat',
  },
];

for (const { homePath, title, knmLocale, tab } of SITE_HOME_CARDS) {
  const localeLabel = knmLocale.toUpperCase();

  test(`${localeLabel} home "${title.source}" card opens KNM #${tab}`, async ({ page }) => {
    await page.goto(homePath);
    await page.getByRole('link', { name: title }).click();
    await expect(page.locator('#knm-app')).toBeVisible();
    await expectKnmTab(page, tab, knmLocale);
  });
}
