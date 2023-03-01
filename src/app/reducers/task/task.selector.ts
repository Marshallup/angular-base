import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState, taskFeatureKey } from './task.reducer';

export const selectTaskFeature =
  createFeatureSelector<TaskState>(taskFeatureKey);

export const selectTasks = createSelector(
  selectTaskFeature,
  (state) => state.tasks
);
