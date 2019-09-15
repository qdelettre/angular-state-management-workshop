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
      this.store.dispatch(addTodo({ title: this.newTodoTitle }));
      this.newTodoTitle = '';
      form.resetForm();
      form.reset();
    }
  }

  toggleTodo(id: string) {
    this.store.dispatch(toggleTodo({ id }));
  }

  editTodo(id: string) {
    this.store.dispatch(editTodo({ id }));
  }

  cancelEditTodo() {
    this.store.dispatch(cancelEditTodo());
  }

  saveEditTodo(todo: Todo) {
    this.store.dispatch(updateTodo({ todo }));
  }

  removeTodo(id: string) {
    this.store.dispatch(removeTodo({ id }));
  }

  removeDoneTodos() {
    this.store.dispatch(removeDoneTodos());
  }

  setTodoFilter(filter: TodoFilter) {
    this.store.dispatch(filterTodos({ filter }));
  }
}
