import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

import { expectKnmTab, getKnmTablist, gotoKnm } from './helpers/knm';

const focusTabWithKeyboard = async (page: Page, tabName: RegExp, maxTabs = 40): Promise<void> => {
  const tab = getKnmTablist(page).getByRole('tab', { name: tabName });
  for (let step = 0; step < maxTabs; step += 1) {
    await page.keyboard.press('Tab');
    if (await tab.evaluate((element) => element === document.activeElement)) return;
  }
  throw new Error(`Could not reach tab matching ${tabName} via keyboard`);
};

test.describe('KNM accessibility', () => {
  test('tab nav is keyboard reachable with Tab and ArrowRight', async ({ page }) => {
    await gotoKnm(page);
    await expectKnmTab(page, 'home');

    await focusTabWithKeyboard(page, /Overview/i);
    await page.keyboard.press('ArrowRight');
    await expectKnmTab(page, 'topics');
    await expect(page.getByText('Study in this order')).toBeVisible();
  });

  test('KNM home has no axe violations in #knm-app', async ({ page }) => {
    await gotoKnm(page);

    const results = await new AxeBuilder({ page }).include('#knm-app').analyze();
    expect(results.violations).toEqual([]);
  });
});
