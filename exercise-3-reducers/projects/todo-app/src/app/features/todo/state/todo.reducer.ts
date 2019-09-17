import uuid from 'uuid/v4';
import { Action, createAction, createReducer, on, props } from '@ngrx/store';

import * as TodoActions from './todo.actions';
import { Todo, TodoFilter } from './todo.model';

// TODO 1: define and export "todoFeatureKey" value for the store feature
export const todoFeatureKey = '';

// TODO 2: define and export "State" interface with "items" object consisting of "[id: string]" props and "Todo" values
// "editedTodoId" which can be string or null and "todoFilter" of "TodoFilter" type
export interface State {}

// TODO 3: define and export "initialState" of type "State" with some default values
// ( try to predefine IDs using uuid before to use them to create initial data )

// TODO 4: define and export "todoReducer" const using "createReducer" NgRx factory
const todoReducer = undefined;

  // TODO 5: pass in initialState as a first argument

  // TODO 6: add "on(<some action>, (state, action) => { return state; })" handler

  // TODO 7: implement this for a real action eg "filterTodos" which re-uses whole state and overwrites "todoFilter" with the action payload value

  // TODO 10: implement "on" handlers for all other actions (addTodo, toggleTodo, removeTodo, editTodo, cancelEditTodo, updateTodo, removeDoneTodos)
  // try to implement all of them while exploring different ways of creating new state using immutable approach

  // TODO 10: try to run tests to see if adding implementation fulfilled their expectation

// TODO 8: define and export "reducer" function which accepts state and action and returns "todoReducer" called with state and action
