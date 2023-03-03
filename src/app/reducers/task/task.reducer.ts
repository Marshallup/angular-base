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
      id: 'task-222',
      title: 'qweqwe',
      completed: false,
    },
  ],
};

export const taskReducer = createReducer(
  initialTaskState,
  on(taskActions.taskAdd, (state, { type, ...task }) => {
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
  }),
  on(taskActions.updateTaskModeById, (state, { id, mode }) => {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            mode,
          };
        }
        return task;
      }),
    };
  }),
  on(taskActions.updateTaskModeTitleById, (state, { id, mode, title }) => {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            mode,
            title,
          };
        }

        return task;
      }),
    };
  }),
  on(taskActions.updateTaskCompletedById, (state, { id, completed }) => {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed,
          };
        }

        return task;
      }),
    };
  })
);
