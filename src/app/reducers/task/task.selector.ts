import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from 'src/app/models';
import { TaskState, taskFeatureKey } from './task.reducer';

export const selectTaskFeature =
  createFeatureSelector<TaskState>(taskFeatureKey);

export const selectTasks = createSelector(
  selectTaskFeature,
  (state) => state.tasks
);

export const getTaskCategoryAll = createSelector(selectTaskFeature, (state) =>
  state.tasks.filter((task) => task.category.code === 'all')
);

export const getTaskCategoryToday = createSelector(selectTaskFeature, (state) =>
  state.tasks.filter((task) => task.category.code === 'today')
);

export const getTaskById = (id: Task['id']) =>
  createSelector(selectTaskFeature, (state) =>
    state.tasks.find((task) => task.id === id)
  );
