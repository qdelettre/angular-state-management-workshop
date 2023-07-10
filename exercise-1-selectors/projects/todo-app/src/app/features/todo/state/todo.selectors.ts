import { createFeatureSelector, createSelector } from '@ngrx/store';

import { todoFeatureKey, State } from './todo.reducer';

// TODO 1: create feature selector for the todo feature key, don't forget generic type!
export const selectTodoFeature = undefined;

// TODO 2: create "selectTodoFilter" selector to select "todoFilter" state property
export const selectTodoFilter = undefined;

// TODO 3: create "selectTodos" selector to select todo items as an array (please return only items which are valid based on active filter)
export const selectTodos = undefined;

// TODO 4: create "selectTodosCount" selector to select todo items count (there at least two ways to do this, eg: array vs object)
export const selectTodosCount = undefined;

// TODO 5: create "selectEditedTodo" selector to select todo item that is being edited (state has a "editedTodoId" property)
export const selectEditedTodo = undefined;

// TODO 8: create selectTodoView selector to select the "perfect" state for the todo component
// so that the component and its template only uses that one selector instead of original 4 selectors (remove them)
// hint: use <ng-container> with *ngIf to unwrap the view state in the template
// hint: selector can be assigned directly to the property so there should be no reference to any interface
