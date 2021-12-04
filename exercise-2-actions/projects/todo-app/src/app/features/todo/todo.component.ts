import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  addTodo,
  cancelEditTodo,
  editTodo,
  filterTodos,
  removeDoneTodos,
  removeTodo,
  toggleTodo,
  updateTodo
} from './state/todo.actions';
import { selectTodosView } from './state/todo.selectors';
import { Todo, TodoFilter } from './state/todo.model';

@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  view$ = this.store.select(selectTodosView);

  newTodoTitle: string;

  constructor(private store: Store) {}

  addTodo(form: NgForm) {
    if (form.valid) {
      // TODO 10: dispatch appropriate action with correct payload to create new todo item
      // hint: the input is stored in "this.newTodoTitle"

      this.newTodoTitle = '';
      form.resetForm();
      form.reset();
    }
  }

  toggleTodo(id: string) {
    // TODO 11: dispatch appropriate action with correct payload to toggle done status of the todo item
  }

  editTodo(id: string) {
    // TODO 12: dispatch appropriate action with correct payload to select todo item for editing
  }

  cancelEditTodo() {
    // TODO 13: dispatch appropriate action with correct payload to de-select todo item for editing
  }

  saveEditTodo(todo: Todo) {
    // TODO 14: dispatch appropriate action with correct payload to save edited todo (update)
  }

  removeTodo(id: string) {
    // TODO 15: dispatch appropriate action with correct payload to remove todo item
  }

  removeDoneTodos() {
    // TODO 16: dispatch appropriate action with correct payload to remove all done todo items
  }

  setTodoFilter(filter: TodoFilter) {
    // TODO 17: dispatch appropriate action with correct payload to update filter value
  }

  // TODO 18: try to run "npm run watch" to run the tests and see if the tests are passing now

  // TODO 19: try to "npm run lint" to see if your actions follow best practices (eg naming)
}
