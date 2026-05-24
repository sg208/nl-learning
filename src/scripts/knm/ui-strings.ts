import { UI } from '~/data/knm/ui';
import { getKnmLang } from '~/lib/knm-content';

export const t = (): (typeof UI)[keyof typeof UI] => UI[getKnmLang()];
