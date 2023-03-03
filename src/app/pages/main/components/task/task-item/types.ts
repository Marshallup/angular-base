import { Task } from 'src/app/models';

export interface TaskItemBlur extends Omit<Task, 'id'> {}
