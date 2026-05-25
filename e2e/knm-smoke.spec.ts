import { expect, test } from '@playwright/test';

import { gotoKnm } from './helpers/knm';

test.describe('KNM smoke', () => {
  test('EN /knm loads with app shell and overview content', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await gotoKnm(page);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      /Knowledge of Dutch Society/i,
    );
    await expect(page.getByText('Study the 8 topics')).toBeVisible();
    expect(errors).toEqual([]);
  });
});
