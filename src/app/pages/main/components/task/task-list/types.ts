import { Task } from 'src/app/models';

export interface TaskCurrentBlurEmit
  extends Pick<Task, 'id' | 'title' | 'mode'> {}
export interface TaskItemChangeEmit extends Pick<Task, 'id' | 'completed'> {}
export interface TaskItemEmitMode extends Pick<Task, 'id' | 'mode'> {}
export interface TaskItemCompletedEmit extends Pick<Task, 'id' | 'completed'> {}
