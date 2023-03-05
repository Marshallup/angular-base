import { Task } from 'src/app/models';

export interface TaskItemBlurEmit extends Pick<Task, 'title'> {}
