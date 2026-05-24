import { about } from './about';
import { accessibility } from './accessibility';
import { disclaimer } from './disclaimer';
import { privacy } from './privacy';
import { terms } from './terms';
import type { LegalPages } from './types';

export type { LegalPageContent, LegalPageId, LegalPages } from './types';

export const legalPages: LegalPages = {
  about,
  accessibility,
  privacy,
  terms,
  disclaimer,
};
