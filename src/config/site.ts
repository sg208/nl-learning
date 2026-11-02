import type { Locale } from '~/lib/i18n';

type NavItem = { href: string; label: Record<Locale, string> };

export const siteConfig = {
  name: 'nllearn.ing',
  tagline: {
    en: 'Learn Dutch society — clearly, at your pace.',
    nl: 'Leer de Nederlandse maatschappij — helder, in je eigen tempo.',
  },
  description: {
    en: 'Free, accessible practice for KNM (Kennis van de Nederlandse Maatschappij) and civic integration. Built for newcomers who want big text and clear contrast.',
    nl: 'Gratis, toegankelijke oefening voor KNM en inburgering. Gemaakt voor nieuwkomers die grote tekst en duidelijk contrast willen.',
  },
  themeColor: { light: '#f6f5f1', dark: '#0e1424' },
  author: 'nllearn.ing',
  repoUrl: 'https://github.com/sg208/nl-learning',
  issuesUrl: 'https://github.com/sg208/nl-learning/issues',
  nav: [
    {
      href: '/',
      label: { en: 'Home', nl: 'Home' },
    },
    {
      href: '/knm',
      label: { en: 'KNM Practice', nl: 'KNM Oefenen' },
    },
    {
      href: '/about',
      label: { en: 'About', nl: 'Over ons' },
    },
  ] satisfies NavItem[],
  footerLinks: [
    { href: '/accessibility', label: { en: 'Accessibility', nl: 'Toegankelijkheid' } },
    { href: '/privacy', label: { en: 'Privacy', nl: 'Privacy' } },
    { href: '/terms', label: { en: 'Terms', nl: 'Voorwaarden' } },
    { href: '/disclaimer', label: { en: 'Disclaimer', nl: 'Disclaimer' } },
  ] satisfies NavItem[],
  navSections: {
    learn: { en: 'Learn', nl: 'Leren' },
    legal: { en: 'Legal', nl: 'Juridisch' },
    language: { en: 'Language', nl: 'Taal' },
  },
  ui: {
    openMenu: { en: 'Open menu', nl: 'Menu openen' },
    closeMenu: { en: 'Close menu', nl: 'Menu sluiten' },
    siteMenu: { en: 'Site menu', nl: 'Sitemenu' },
    footerNav: { en: 'Footer', nl: 'Voettekst' },
    sourceLink: {
      en: 'Source code on GitHub (opens in a new tab)',
      nl: 'Broncode op GitHub (opent in een nieuw tabblad)',
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const tSite = <K extends keyof SiteConfig>(
  key: K,
  locale: Locale,
): SiteConfig[K] extends Record<Locale, infer V> ? V : SiteConfig[K] => {
  const value = siteConfig[key];
  if (value && typeof value === 'object' && locale in value) {
    return (value as Record<Locale, unknown>)[locale] as SiteConfig[K] extends Record<
      Locale,
      infer V
    >
      ? V
      : SiteConfig[K];
  }
  return value as SiteConfig[K] extends Record<Locale, infer V> ? V : SiteConfig[K];
};
