import { createFeatureSelector, createSelector } from '@ngrx/store';

import { todoFeatureKey, State } from './todo.reducer';

const selectTodoFeature = createFeatureSelector<State>(todoFeatureKey);

export const selectAllTodos = createSelector(
  selectTodoFeature,
  todo => Object.values(todo.items)
);

export const selectDoneTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.done)
);

export const selectActiveTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => !todo.done)
);

export const selectTodosCount = createSelector(
  selectAllTodos,
  todos => todos.length
);
