import { expect, test } from '@playwright/test';

import { expectKnmTab, gotoKnm } from './helpers/knm';

test.describe('KNM tab navigation', () => {
  test('hash deep links render each tab panel', async ({ page }) => {
    await gotoKnm(page, { hash: 'topics' });
    await expectKnmTab(page, 'topics');
    await expect(page.getByText('Study in this order')).toBeVisible();

    await gotoKnm(page, { hash: 'whowhat' });
    await expectKnmTab(page, 'whowhat');
    await expect(page.getByText('CRUCIAL DISTINCTION')).toBeVisible();

    await gotoKnm(page, { hash: 'exam' });
    await expectKnmTab(page, 'exam');
    await expect(page.getByText('CHOOSE EXAM + WORDING')).toBeVisible();
  });
});
