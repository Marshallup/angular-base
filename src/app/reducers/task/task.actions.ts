import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models';

export enum taskActionsType {
  addTask = '[TASK] addTask',
  updateTaskTitleById = '[TASK] updateTaskTitleById',
}

export const taskAdd = createAction(
  taskActionsType.addTask,
  props<{ task: Task }>()
);

export const updateTaskTitleById = createAction(
  taskActionsType.updateTaskTitleById,
  props<{ taskId: Task['id']; title: Task['title'] }>()
);
