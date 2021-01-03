import uuid from 'uuid/v4';
import { createAction, props } from '@ngrx/store';
import { Todo, TodoFilter } from './todo.model';

// every action has a type, don't forget to use following type format: [<action-origin>] <action-description>
// eg: [User Page] Load Users

// try to explore reducer to see how is given action used to produce a new state

// TODO 1: create "addTodo" action with a "title" payload (the text of the todo)
export const addTodo = undefined;

// TODO 2: create "toggleTodo" action with a "id" payload (string)
export const toggleTodo = undefined;

// TODO 3: create "removeTodo" action with a "id" payload (string)
export const removeTodo = undefined;

// TODO 4: create "editTodo" action with a "id" payload (string)
export const editTodo = undefined;

// TODO 5: create "cancelEditTodo" action without payload
export const cancelEditTodo = undefined;

// TODO 6: create "updateTodo" action with a "todo" payload (Todo type), (flat or in property? explore reducer...)
export const updateTodo = undefined;

// TODO 7: create "removeDoneTodos" action without payload
export const removeDoneTodos = undefined;

// TODO 8: create "filterTodos" action  with a "filter" payload (TodoFilter type)
export const filterTodos = undefined;

// TODO 9: create "addTodoWithId" action using CUSTOM action factory method (prop) => payload
// the factory with accept title (text of the to-do) but the resulting payload will be an object with both "title" and "id" properties (id is generated using uuid)
export const addTodoWithId = undefined;

// there are further TODO comments in todo.component.ts, please continue there...
