import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from 'src/app/models';
import { TaskState, taskFeatureKey } from './task.reducer';
import * as dayjs from 'dayjs';

export const selectTaskFeature =
  createFeatureSelector<TaskState>(taskFeatureKey);

export const selectTasks = createSelector(
  selectTaskFeature,
  (state) => state.tasks
);

export const getTaskCategoryToday = createSelector(selectTaskFeature, (state) =>
  state.tasks.filter(
    (task) =>
      dayjs(task.createdAt).format('DD/MM/YYYY') ===
      dayjs(new Date()).format('DD/MM/YYYY')
  )
);

export const getTaskCategoryCompleted = createSelector(
  selectTaskFeature,
  (state) => state.tasks.filter((task) => task.completed)
);

export const getTaskById = (id: Task['id']) =>
  createSelector(selectTaskFeature, (state) =>
    state.tasks.find((task) => task.id === id)
  );
