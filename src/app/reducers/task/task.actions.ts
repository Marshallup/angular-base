import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models';

export enum taskActionsType {
  addTask = '[TASK] addTask',
}

export const taskAdd = createAction(
  taskActionsType.addTask,
  props<{ task: Task }>()
);
