import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from 'src/app/models';
import { TaskState, taskFeatureKey } from './task.reducer';

export const selectTaskFeature =
  createFeatureSelector<TaskState>(taskFeatureKey);

export const selectTasks = createSelector(
  selectTaskFeature,
  (state) => state.tasks
);

export const getTaskById = (id: Task['id']) =>
  createSelector(selectTaskFeature, (state) =>
    state.tasks.find((task) => task.id === id)
  );
