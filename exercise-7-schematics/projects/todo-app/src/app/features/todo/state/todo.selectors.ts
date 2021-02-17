import { createFeatureSelector, createSelector } from '@ngrx/store';

import { todoFeatureKey, State } from './todo.reducer';

const selectTodoFeature = createFeatureSelector<State>(todoFeatureKey);

export const selectTodoFilter = createSelector(
  selectTodoFeature,
  todo => todo.todoFilter
);

export const selectTodos = createSelector(
  selectTodoFeature,
  selectTodoFilter,
  (todo, filter) =>
    Object.values(todo.items).filter(item => {
      if (filter === 'ALL') {
        return true;
      } else if (filter === 'DONE') {
        return item.done;
      } else if (filter === 'ACTIVE') {
        return !item.done;
      }
    })
);

export const selectTodosCount = createSelector(
  selectTodos,
  todos => todos.length
);

export const selectEditedTodo = createSelector(
  selectTodoFeature,
  todo => todo.items[todo.editedTodoId]
);
