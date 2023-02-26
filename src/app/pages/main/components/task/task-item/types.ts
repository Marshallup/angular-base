export type TaskMode = 'edit' | 'read';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  mode?: TaskMode;
}

export interface TaskItemBlur extends Omit<Task, 'id'> {}
