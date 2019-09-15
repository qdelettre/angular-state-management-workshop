import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  addTodo,
  filterTodos,
  removeDoneTodos,
  removeTodo,
  toggleTodo
} from './state/todo.actions';
import {
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

  newTodoTitle: string;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.todos = this.store.pipe(select(selectTodos));
    this.todosCount = this.store.pipe(select(selectTodosCount));
    this.todosFilter = this.store.pipe(select(selectTodoFilter));
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
