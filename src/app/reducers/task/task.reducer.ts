import { Action, createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/models';
import * as taskActions from './task.actions';
// import { taskActionsType, TaskAddTask } from './task.actions';

export const taskFeatureKey = 'task';

export interface TaskState {
  tasks: Task[];
}

export const initialTaskState: TaskState = {
  tasks: [
    {
      id: 1,
      title: 'qweqwe',
    },
  ],
};

export const taskReducer = createReducer(
  initialTaskState,
  on(taskActions.taskAdd, (state, { task }) => {
    return {
      ...state,
      tasks: [task],
    };
  })
);
