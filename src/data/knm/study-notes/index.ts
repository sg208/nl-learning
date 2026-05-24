import { cultuurNotes } from './cultuur';
import { gezondheidNotes } from './gezondheid';
import { geschiedenisNotes } from './geschiedenis';
import { onderwijsNotes } from './onderwijs';
import { overheidNotes } from './overheid';
import { politiekNotes } from './politiek';
import type { StudyNotes } from './types';
import { werkNotes } from './werk';
import { wonenNotes } from './wonen';

export type { StudyNote, StudyNotes, TopicId } from './types';

export const STUDY_NOTES = {
  gezondheid: gezondheidNotes,
  werk: werkNotes,
  overheid: overheidNotes,
  wonen: wonenNotes,
  onderwijs: onderwijsNotes,
  politiek: politiekNotes,
  geschiedenis: geschiedenisNotes,
  cultuur: cultuurNotes,
} as const satisfies StudyNotes;
