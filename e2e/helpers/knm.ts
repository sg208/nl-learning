import { expect, type Page } from '@playwright/test';

export type KnmLocale = 'en' | 'nl';
export type KnmTabId = 'home' | 'topics' | 'whowhat' | 'exam';

const KNM_PATH: Record<KnmLocale, string> = {
  en: '/knm',
  nl: '/nl/knm',
};

const TAB_LABELS: Record<KnmLocale, Record<KnmTabId, RegExp>> = {
  en: {
    home: /Overview/i,
    topics: /Topics/i,
    whowhat: /Who does what/i,
    exam: /Mock Exam/i,
  },
  nl: {
    home: /Overzicht/i,
    topics: /Onderwerpen/i,
    whowhat: /Wie doet wat/i,
    exam: /Mock Examen/i,
  },
};

const TAB_HASH: Record<KnmTabId, RegExp> = {
  home: /knm(?:#(?:home)?)?$/,
  topics: /#topics(?:\/|$)/,
  whowhat: /#whowhat(?:\/|$)/,
  exam: /#exam(?:\/|$)/,
};

export const gotoKnm = async (
  page: Page,
  options: { locale?: KnmLocale; hash?: string } = {},
): Promise<void> => {
  const locale = options.locale ?? 'en';
  const hash = options.hash?.replace(/^#/, '') ?? '';
  const path = KNM_PATH[locale];
  const url = hash ? `${path}#${hash}` : path;
  await page.goto(url);
  await expect(page.locator('#knm-app')).toBeVisible();
  await expect(page.locator('#knm-tabpanel')).toBeVisible();
};

export const getKnmTablist = (page: Page, locale: KnmLocale = 'en') =>
  page.getByRole('tablist', {
    name: locale === 'en' ? 'KNM sections' : 'KNM onderdelen',
  });

export const expectKnmTab = async (
  page: Page,
  tabId: KnmTabId,
  locale: KnmLocale = 'en',
): Promise<void> => {
  await expect(page).toHaveURL(TAB_HASH[tabId]);
  await expect(
    getKnmTablist(page, locale).getByRole('tab', {
      name: TAB_LABELS[locale][tabId],
      selected: true,
    }),
  ).toBeVisible();
};

export const switchLocale = async (page: Page, target: KnmLocale): Promise<void> => {
  const currentLocale: KnmLocale = page.url().includes('/nl/') ? 'nl' : 'en';
  const navLabel = currentLocale === 'en' ? 'Language' : 'Taal';
  const link = page
    .locator(`header nav[aria-label="${navLabel}"]`)
    .getByRole('link', { name: target.toUpperCase(), exact: true });
  await expect(link).toBeVisible();
  await link.click();
  await expect(page.locator('#knm-app')).toBeVisible();
};
