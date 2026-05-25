import { expect, test } from '@playwright/test';

import { expectKnmTab, gotoKnm } from './helpers/knm';

test.describe('KNM exam review', () => {
  test('Read study note opens #topics/{id}/{heading}', async ({ page }) => {
    await gotoKnm(page, { hash: 'exam/1/a/review' });
    await expect(page).toHaveURL(/#exam\/1\/a\/review$/);
    await expect(page.getByRole('button', { name: '← Back to results' })).toBeVisible();

    await Promise.all([
      page.waitForURL(/#topics\/werk\/UWV$/),
      page.getByRole('button', { name: /Read study note → UWV/i }).click(),
    ]);

    await expectKnmTab(page, 'topics');
    await expect(page.getByRole('heading', { level: 2, name: 'Work & Income' })).toBeVisible();
    await expect(page.locator('[data-note-heading="UWV"]')).toBeVisible();
    await expect(page.getByText('UWV (benefits agency)')).toBeVisible();
  });
});
