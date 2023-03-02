import { createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/models';
import * as taskActions from './task.actions';

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
    const taskIdx = state.tasks.findIndex(
      (taskState) => taskState.id === task.id
    );

    const tasks = [...state.tasks];

    if (taskIdx > -1) {
      tasks[taskIdx] = { ...tasks[taskIdx], ...task };
    } else {
      tasks.push(task);
    }

    return {
      ...state,
      tasks,
    };
  })
);
