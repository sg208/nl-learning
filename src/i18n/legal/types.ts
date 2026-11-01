import type { Locale } from '~/lib/i18n';

export type PageLink = { href: string; label: string };

type PageBlock = { heading?: string; paragraphs: string[]; links?: PageLink[] };

export type LegalPageContent = {
  title: string;
  eyebrow: string;
  intro: string;
  blocks: PageBlock[];
};

export type LegalPageId = 'about' | 'accessibility' | 'privacy' | 'terms' | 'disclaimer';
export type LegalPages = Record<LegalPageId, Record<Locale, LegalPageContent>>;
