import { TOPICS } from '~/data/knm/topics';

import { setState } from './set-state';

export const openStudyNote = (topicId: string, noteHeading: string): void => {
  const topic = TOPICS.find((item) => item.id === topicId);
  if (!topic) return;
  setState({
    tab: 'topics',
    selectedTopic: topic,
    reviewing: false,
    scrollToNoteHeading: noteHeading,
  });
};
