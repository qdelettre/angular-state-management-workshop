import uuid from 'uuid/v4';
import { createAction, props } from '@ngrx/store';
import { TodoFilter } from './todo.model';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ title: string }>()
);

export const addTodoWithId = createAction(
  '[Todo Page] Add Todo (with ID)',
  (title: string) => ({ title, id: uuid() })
);

export const toggleTodo = createAction(
  '[Todo Page] Toggle Todo',
  props<{ id: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

export const removeDoneTodos = createAction('[Todo Page] Remove Done Todos');

export const filterTodos = createAction(
  '[Todo Page] Filter Todos',
  props<{ filter: TodoFilter }>()
);
