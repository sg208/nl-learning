import { expect, test } from '@playwright/test';

import { expectKnmTab, gotoKnm } from './helpers/knm';

test.describe('KNM topic navigation', () => {
  test('topic list click updates hash to #topics/{id}', async ({ page }) => {
    await gotoKnm(page, { hash: 'topics' });
    await expectKnmTab(page, 'topics');

    await page.getByRole('button', { name: /Work & Income/i }).click();

    await expect(page).toHaveURL(/#topics\/werk$/);
    await expect(page.getByRole('heading', { level: 2, name: 'Work & Income' })).toBeVisible();
    await expect(page.getByRole('button', { name: '← Back to topics' })).toBeVisible();
  });

  test('NL topic list click updates hash to #topics/{id}', async ({ page }) => {
    await gotoKnm(page, { locale: 'nl', hash: 'topics' });
    await expectKnmTab(page, 'topics', 'nl');

    await page.getByRole('button', { name: /Werk & Inkomen/i }).click();

    await expect(page).toHaveURL(/#topics\/werk$/);
    await expect(page.getByRole('heading', { level: 2, name: 'Werk & Inkomen' })).toBeVisible();
    await expect(page.getByRole('button', { name: "← Terug naar thema's" })).toBeVisible();
  });

  test('back to topics clears topic segment from hash', async ({ page }) => {
    await gotoKnm(page, { hash: 'topics/werk' });
    await expect(page).toHaveURL(/#topics\/werk$/);

    await page.getByRole('button', { name: '← Back to topics' }).click();

    await expect(page).toHaveURL(/\/knm#topics$/);
    await expectKnmTab(page, 'topics');
    await expect(page.getByText('Study in this order')).toBeVisible();
    await expect(page.getByRole('button', { name: /Work & Income/i })).toBeVisible();
  });
});
