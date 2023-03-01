import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { type TaskState, taskReducer, taskFeatureKey } from './task';

export interface State {
  [taskFeatureKey]: TaskState;
}

export const reducers: ActionReducerMap<State> = {
  [taskFeatureKey]: taskReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
