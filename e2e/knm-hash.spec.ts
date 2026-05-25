import { expect, test } from '@playwright/test';

import { expectKnmTab, gotoKnm } from './helpers/knm';

test.describe('KNM hash routing', () => {
  test('topic detail deep link shows topic heading', async ({ page }) => {
    await gotoKnm(page, { hash: 'topics/werk' });
    await expectKnmTab(page, 'topics');
    await expect(page.getByRole('heading', { level: 2, name: 'Work & Income' })).toBeVisible();
    await expect(page.getByRole('button', { name: '← Back to topics' })).toBeVisible();
  });

  test('exam picker starts exam 1 variant A', async ({ page }) => {
    await gotoKnm(page, { hash: 'exam' });
    await page.getByRole('button', { name: 'Wording A →' }).first().click();
    await expect(page).toHaveURL(/#exam\/1\/a$/);
    await expect(page.getByText('QUESTION 1/40')).toBeVisible();
    await expect(page.getByRole('button', { name: '← Stop' })).toBeVisible();
  });
});
