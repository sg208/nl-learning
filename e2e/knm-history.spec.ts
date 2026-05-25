import { expect, test } from '@playwright/test';

import { clickKnmTab, expectKnmTab, gotoKnm } from './helpers/knm';

test.describe('KNM browser history', () => {
  test('back and forward restore tab from hash history', async ({ page }) => {
    await gotoKnm(page);
    await expectKnmTab(page, 'home');

    await clickKnmTab(page, 'topics');
    await expectKnmTab(page, 'topics');
    await expect(page.getByText('Study in this order')).toBeVisible();

    await clickKnmTab(page, 'whowhat');
    await expectKnmTab(page, 'whowhat');
    await expect(page.getByText('CRUCIAL DISTINCTION')).toBeVisible();

    await page.goBack();
    await expectKnmTab(page, 'topics');
    await expect(page.getByText('Study in this order')).toBeVisible();

    await page.goForward();
    await expectKnmTab(page, 'whowhat');
    await expect(page.getByText('CRUCIAL DISTINCTION')).toBeVisible();
  });
});
