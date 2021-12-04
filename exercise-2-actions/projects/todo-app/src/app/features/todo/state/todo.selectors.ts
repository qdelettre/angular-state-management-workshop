import { createFeatureSelector, createSelector } from '@ngrx/store';

import { todoFeatureKey, State } from './todo.reducer';

const selectTodoFeature = createFeatureSelector<State>(todoFeatureKey);

export const selectTodosView = createSelector(selectTodoFeature, state => {
  const todos = Object.values(state.items).filter(item => {
    if (state.todoFilter === 'ALL') {
      return true;
    } else if (state.todoFilter === 'DONE') {
      return item.done;
    } else if (state.todoFilter === 'ACTIVE') {
      return !item.done;
    }
  });
  return {
    ...state,
    todos,
    editedTodo: state.items[state.editedTodoId]
  };
});
