import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const REPO_URL = 'https://github.com/sg208/nl-learning';

const LEGAL_PAGES = [
  { path: '/accessibility', lang: 'en', link: 'Accessibility' },
  { path: '/privacy', lang: 'en', link: 'Privacy' },
  { path: '/terms', lang: 'en', link: 'Terms' },
  { path: '/nl/accessibility', lang: 'nl', link: 'Toegankelijkheid' },
  { path: '/nl/privacy', lang: 'nl', link: 'Privacy' },
  { path: '/nl/terms', lang: 'nl', link: 'Voorwaarden' },
] as const;

test.describe('legal pages', () => {
  for (const { path, lang, link } of LEGAL_PAGES) {
    test(`${path} renders with one h1, footer link and no axe violations`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });

      const home = lang === 'nl' ? '/nl' : '/';
      await page.goto(home);
      const footer = page.getByRole('contentinfo');
      await footer.getByRole('link', { name: link, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));

      await expect(page.locator('html')).toHaveAttribute('lang', lang);
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      await expect(page.getByRole('main')).toBeVisible();

      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations).toEqual([]);
      expect(errors).toEqual([]);
    });
  }

  for (const home of ['/', '/nl']) {
    test(`footer on ${home} links to the GitHub repo`, async ({ page }) => {
      await page.goto(home);
      const repoLink = page.getByRole('contentinfo').getByRole('link', { name: /GitHub/ });
      await expect(repoLink).toHaveAttribute('href', REPO_URL);
      await expect(repoLink).toHaveAccessibleName(
        /^(Source on GitHub \(opens GitHub\)|Broncode op GitHub \(opent GitHub\))$/,
      );
    });
  }
});
