import { getUniqId } from '../share/utils';

export type CategoryType = 'all' | 'today';

export interface Category {
  id: string;
  code: CategoryType;
  title: string;
}

export const createCategory = (
  code: Category['code'],
  title: Category['title']
): Category => ({
  id: getUniqId('category'),
  code,
  title,
});

export const categories = {
  all: createCategory('all', 'Все'),
  today: createCategory('today', 'Сегодня'),
};
