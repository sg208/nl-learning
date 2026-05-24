export type Locale = 'en' | 'nl';

export const locales = ['en', 'nl'] as const satisfies readonly Locale[];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands',
};

export const getLocaleFromPath = (pathname: string): Locale =>
  pathname === '/nl' || pathname.startsWith('/nl/') ? 'nl' : 'en';

export const localizedPath = (path: string, locale: Locale): string => {
  const hashIndex = path.indexOf('#');
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (locale === defaultLocale) {
    return `${normalized === '/' ? '/' : normalized}${hash}`;
  }
  return `${normalized === '/' ? '/nl' : `/nl${normalized}`}${hash}`;
};

export const switchLocalePath = (pathname: string, target: Locale): string => {
  const withoutNl = pathname.replace(/^\/nl(?=\/|$)/, '') || '/';
  return localizedPath(withoutNl, target);
};
