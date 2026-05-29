import type { Locale } from '~/lib/i18n';

type NavItem = { href: string; label: Record<Locale, string> };

export const siteConfig = {
  name: 'nllearn.ing',
  tagline: {
    en: 'Learn Dutch society — clearly, at your pace.',
    nl: 'Leer de Nederlandse maatschappij — helder, in je eigen tempo.',
  },
  description: {
    en: 'Free, accessible practice for KNM (Kennis van de Nederlandse Maatschappij) and civic integration. Built for newcomers who want big text, clear contrast, and offline study.',
    nl: 'Gratis, toegankelijke oefening voor KNM en inburgering. Gemaakt voor nieuwkomers die grote tekst, duidelijk contrast en offline studeren willen.',
  },
  themeColor: '#e63946',
  author: 'nllearn.ing',
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
