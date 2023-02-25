import { Task } from '../task-item';

export interface TaskItemChangeEmit extends Pick<Task, 'id' | 'completed'> {}
