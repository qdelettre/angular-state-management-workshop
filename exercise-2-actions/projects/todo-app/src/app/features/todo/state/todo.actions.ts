import uuid from 'uuid/v4';
import { createAction, props } from '@ngrx/store';
import { Todo, TodoFilter } from './todo.model';

// every action has a type, don't forget to use following type format: [<action-origin>] <action-description>
// eg: [User Page] Load Users

// TODO 1: create "addTodo" action with a "title" payload (the text of the todo)
export const addTodo = undefined;

// TODO 2: create "toggleTodo" action with a "id" payload (uuid so string)
export const toggleTodo = undefined;

// TODO 3: create "removeTodo" action with a "id" payload (uuid so string)
export const removeTodo = undefined;

// TODO 4: create "editTodo" action with a "id" payload (uuid so string), sets "editedTodoId" in state
export const editTodo = undefined;

// TODO 5: create "cancelEditTodo" action without payload, sets "editedTodoId" to null in state
export const cancelEditTodo = undefined;

// TODO 6: create "updateTodo" action with a "todo" payload (Todo type)
export const updateTodo = undefined;

// TODO 7: create "removeDoneTodos" action without payload
export const removeDoneTodos = undefined;

// TODO 7: create "filterTodos" action  with a "filter" payload (TodoFilter type)
export const filterTodos = undefined;

// TODO 8: create "addTodoWithId" action using CUSTOM action factory method (prop) => payload
// the factory with accept title (text of the to-do) but the resulting payload will also contain generated "id" (using uuid)
export const addTodoWithId = undefined;
