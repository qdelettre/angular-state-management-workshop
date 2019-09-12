import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from './state/todo.model';
import { selectAllTodos, selectTodosCount } from './state/todo.selectors';
import { removeTodo, toggleTodo } from './state/todo.actions';

@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Observable<Todo[]>;
  todosCount: Observable<number>;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.todos = this.store.select(selectAllTodos);
    this.todosCount = this.store.select(selectTodosCount);
  }

  addTodo() {}

  toggleTodo(id: string) {
    this.store.dispatch(toggleTodo({ id }));
  }

  removeTodo(id: string) {
    this.store.dispatch(removeTodo({ id }));
  }

  removeDoneTodos() {}

  setTodoFilter() {}
}
