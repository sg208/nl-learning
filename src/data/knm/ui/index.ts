import { en } from './en';
import { nl } from './nl';
import type { KnmLang, KnmUiStrings } from './types';

export type { KnmLang, KnmUiStrings } from './types';

export const UI: Record<KnmLang, KnmUiStrings> = { nl, en };
