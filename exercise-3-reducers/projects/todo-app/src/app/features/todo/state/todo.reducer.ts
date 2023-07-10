import uuid from 'uuid/v4';
import { Action, createAction, createReducer, on, props } from '@ngrx/store';

import * as TodoPageEvents from './todo.actions';
import { Todo, TodoFilter } from './todo.model';

// In this exercise, the order of TODO comments is bit more jumping around the files than in previous exercises
// please try to follow them in that order (1, 2, 3 ...) so that you build your implementation as expected

// TODO 1: define and export "todoFeatureKey" to give name to a feature state slice (eg: todos)
export const todoFeatureKey = '';

// TODO 2: define and export "State" interface with:
// "items" object consisting of "[id: string]" props and "Todo" values
// "editedTodoId" which can be string or null
// "todoFilter" of "TodoFilter" type
export interface State {} // tslint:disable-line

// TODO 3: define and export "initialState" of type "State" with some default values
// Predefine (and store in constant variable) four IDs using uuid() and use them to create initial items with following titles
// 'Sign up for NgRx workshop' (mark it as done)
// 'Learn NgRx'
// 'Use NgRx in your apps'
// 'Implement amazing features for users'

// TODO 4: define and export "todoReducer" const using "createReducer" NgRx factory
export const todoReducer = undefined;

// TODO 5: pass in initialState as a first argument

// TODO 6: add "on(<some action>, (state, action) => { return state; })" handler (actions were imported as TodoActions)

// TODO 7: implement this for a real action eg "TodoPageEvents.todosFilterChanged" which re-uses whole state and overwrites "todoFilter" with the action payload value
// hint: try to destructure new filter value from action function argument and use ({}) shorthand syntax to return new state object

// the 8th step is in todo.module.ts file

// try to implement all other while exploring different ways of creating new state using immutable approach
// TODO 9: implement "on" handlers for TodoPageEvents.addTodoWithIDTriggered
// TODO 10: implement "on" handlers for TodoPageEvents.toggleTodoTriggered
// TODO 11: implement "on" handlers for TodoPageEvents.removeTodoTriggered
// TODO 12: implement "on" handlers for TodoPageEvents.editTodoTriggered
// TODO 13: implement "on" handlers for TodoPageEvents.cancelEditTodoTriggered
// TODO 14: implement "on" handlers for TodoPageEvents.updateTodoTriggered
// TODO 15: implement "on" handlers for TodoPageEvents.removeDoneTodosTriggered

// TODO 16: try to run tests to see if adding implementation fulfilled their expectation
// TODO 17: try to "npm run lint" to see if your implementation follows the best practices
