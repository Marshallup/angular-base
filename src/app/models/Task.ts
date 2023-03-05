import { Category } from './Category';

export type TaskMode = 'edit' | 'read';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: Category;
  mode?: TaskMode;
}
