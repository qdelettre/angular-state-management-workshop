import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
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
import {
  selectEditedTodo,
  selectTodoFilter,
  selectTodos,
  selectTodosCount
} from './state/todo.selectors';
import { Todo, TodoFilter } from './state/todo.model';

@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Observable<Todo[]>;
  todosCount: Observable<number>;
  todosFilter: Observable<string>;
  todosEditedTodo: Observable<Todo | undefined>;

  newTodoTitle: string;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.todos = this.store.pipe(select(selectTodos));
    this.todosCount = this.store.pipe(select(selectTodosCount));
    this.todosFilter = this.store.pipe(select(selectTodoFilter));
    this.todosEditedTodo = this.store.pipe(select(selectEditedTodo));
  }

  addTodo(form: NgForm) {
    if (form.valid) {
      // TODO 10: dispatch appropriate action with correct payload to create new todo item (the input is stored in "this.newTodoTitle")

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

  // TODO 18: try to run npm run watch to run the tests and see if the tests are passing now
}
