import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const envSiteUrl = process.env.SITE_URL;
const isBuild = process.argv.includes('build');
if (!envSiteUrl && isBuild && process.env.NODE_ENV !== 'development') {
  throw new Error(
    'SITE_URL must be set when building for production (canonical URL, OG, and sitemap all depend on it).',
  );
}
const SITE_URL = envSiteUrl ?? 'https://nllearn.ing';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          nl: 'nl-NL',
        },
      },
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: true,
    },
  },
});
