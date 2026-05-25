import { expect, test } from '@playwright/test';

import { expectKnmTab, gotoKnm, switchLocale } from './helpers/knm';

test.describe('KNM locale switch', () => {
  test('NL /nl/knm shows Dutch UI on topics tab', async ({ page }) => {
    await gotoKnm(page, { locale: 'nl', hash: 'topics' });
    await expectKnmTab(page, 'topics', 'nl');
    await expect(page.getByText('Leer in deze volgorde')).toBeVisible();
  });

  test('switch EN → NL preserves hash', async ({ page }) => {
    await gotoKnm(page, { hash: 'topics' });
    await expectKnmTab(page, 'topics', 'en');

    await switchLocale(page, 'nl');
    await expect(page).toHaveURL(/\/nl\/knm#topics$/);
    await expectKnmTab(page, 'topics', 'nl');
  });
});
