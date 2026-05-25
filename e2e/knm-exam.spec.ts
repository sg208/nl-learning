import { expect, test, type Page } from '@playwright/test';

import { expectKnmTab, gotoKnm } from './helpers/knm';

const startExam1A = async (page: Page): Promise<void> => {
  await gotoKnm(page, { hash: 'exam' });
  await page.getByRole('button', { name: 'Wording A →' }).first().click();
  await expect(page).toHaveURL(/#exam\/1\/a$/);
  await expect(page.getByText('QUESTION 1/40')).toBeVisible();
};

const fillAllCorrectAnswersInSession = async (page: Page): Promise<void> => {
  await page.evaluate(() => {
    const raw = sessionStorage.getItem('nl-learning-knm-live');
    if (!raw) throw new Error('KNM session missing');
    const snapshot = JSON.parse(raw) as {
      exam: Array<{ answer: number }> | null;
      answers: Record<string, number>;
    };
    if (!snapshot.exam) throw new Error('KNM exam missing from session');
    snapshot.answers = Object.fromEntries(
      snapshot.exam.map((question, index) => [String(index), question.answer]),
    );
    sessionStorage.setItem('nl-learning-knm-live', JSON.stringify(snapshot));
  });
};

test.describe('KNM exam flow', () => {
  test('answer one question and navigate next/prev', async ({ page }) => {
    await startExam1A(page);

    const firstOption = page.locator('.option-btn').first();
    await firstOption.click();
    await expect(firstOption).toHaveClass(/selected/);

    await page.getByRole('button', { name: 'Next →' }).click();
    await expect(page.getByText('QUESTION 2/40')).toBeVisible();
    await expect(page.getByRole('button', { name: 'QUESTION 1/40' })).toHaveClass(/answered/);

    await page.getByRole('button', { name: '← Previous' }).click();
    await expect(page.getByText('QUESTION 1/40')).toBeVisible();
    await expect(firstOption).toHaveClass(/selected/);
  });

  test('stop exam returns to #exam picker', async ({ page }) => {
    await startExam1A(page);

    await page.getByRole('button', { name: '← Stop' }).click();

    await expect(page).toHaveURL(/\/knm#exam$/);
    await expectKnmTab(page, 'exam');
    await expect(page.getByText('CHOOSE EXAM + WORDING')).toBeVisible();
  });

  test('submit exam with prefilled answers shows results', async ({ page }) => {
    await startExam1A(page);
    await fillAllCorrectAnswersInSession(page);
    await page.reload();
    await expect(page).toHaveURL(/#exam\/1\/a$/);

    await page.getByRole('button', { name: /Submit exam \(40\/40 answered\)/ }).click();

    await expect(page).toHaveURL(/#exam\/1\/a\/results$/);
    await expect(
      page.locator('#knm-app').getByRole('heading', { level: 2, name: '40 / 40' }),
    ).toBeVisible();
    await expect(page.locator('#knm-app .results-status--pass')).toHaveText('PASSED ✓');
    await expect(page.getByRole('button', { name: 'Review answers' })).toBeVisible();
  });
});
