import { siteConfig } from '~/config/site';
import { defaultLocale, switchLocalePath, type Locale } from '~/lib/i18n';

export const hrefLangTags: Record<Locale, string> = {
  en: 'en',
  nl: 'nl-NL',
};

export const ogLocaleTags: Record<Locale, string> = {
  en: 'en_US',
  nl: 'nl_NL',
};

export type AlternateLink = { hreflang: string; href: string };

const innerPageLabels: Record<string, Record<Locale, string>> = [
  ...siteConfig.nav,
  ...siteConfig.footerLinks,
].reduce<Record<string, Record<Locale, string>>>((labels, item) => {
  if (item.href === '/') return labels;
  labels[item.href] = { en: item.label.en, nl: item.label.nl };
  return labels;
}, {});

const homeLabels: Record<Locale, string> = siteConfig.nav[0].label;

export const serializeJsonLd = (block: Record<string, unknown>): string =>
  JSON.stringify(block)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

export const getAlternateLinks = (pathname: string, siteOrigin: string): AlternateLink[] => {
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  if (normalizedPath === '/offline') return [];

  const links: AlternateLink[] = (['en', 'nl'] as const).map((locale) => ({
    hreflang: hrefLangTags[locale],
    href: new URL(switchLocalePath(pathname, locale), siteOrigin).toString(),
  }));

  links.push({
    hreflang: 'x-default',
    href: new URL(switchLocalePath(pathname, defaultLocale), siteOrigin).toString(),
  });

  return links;
};

export const organizationJsonLd = (siteOrigin: string): Record<string, unknown> => ({
  '@type': 'Organization',
  '@id': `${siteOrigin}/#org`,
  name: siteConfig.name,
  url: siteOrigin,
  logo: `${siteOrigin}/icons/icon-192.png`,
});

export const breadcrumbJsonLd = (
  pathname: string,
  locale: Locale,
  siteOrigin: string,
): Record<string, unknown> | null => {
  const enPath = switchLocalePath(pathname, defaultLocale);
  if (enPath === '/' || enPath === '/offline') return null;

  const pageLabel = innerPageLabels[enPath];
  if (!pageLabel) return null;

  const homeUrl = new URL(switchLocalePath('/', locale), siteOrigin).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabels[locale],
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageLabel[locale],
      },
    ],
  };
};
