import type { DictionaryItem } from './dictionary-item';

export type DictionaryResponse<T extends DictionaryItem = DictionaryItem> = {
  items: T[];
};