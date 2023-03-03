import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models';

export enum taskActionsType {
  addTask = '[TASK] addTask',
  updateTaskTitleById = '[TASK] updateTaskTitleById',
  updateTaskModeById = '[TASK] updateTaskModeById',
  updateTaskModeTitleById = '[TASK] updateTaskModeTitleById',
  updateTaskCompletedById = '[TASK] updateTaskCompletedById',
}

export const taskAdd = createAction(taskActionsType.addTask, props<Task>());

export const updateTaskTitleById = createAction(
  taskActionsType.updateTaskTitleById,
  props<Pick<Task, 'id' | 'title'>>()
);

export const updateTaskModeById = createAction(
  taskActionsType.updateTaskModeById,
  props<Pick<Task, 'id' | 'mode'>>()
);

export const updateTaskModeTitleById = createAction(
  taskActionsType.updateTaskModeTitleById,
  props<Pick<Task, 'id' | 'mode' | 'title'>>()
);

export const updateTaskCompletedById = createAction(
  taskActionsType.updateTaskCompletedById,
  props<Pick<Task, 'id' | 'completed'>>()
);
