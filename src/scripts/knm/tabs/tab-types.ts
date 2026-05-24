import { t } from '../ui-strings';
import type { TabId } from '../types';

export const getTabDefs = (): Array<{ id: TabId; label: string }> => {
  const u = t();
  return [
    { id: 'home', label: u.tabHome },
    { id: 'topics', label: u.tabTopics },
    { id: 'whowhat', label: u.tabWho },
    { id: 'exam', label: u.tabExam },
  ];
};
