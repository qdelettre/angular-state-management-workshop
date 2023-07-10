import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoPageEvents } from './state/todo.actions';
import { Todo, TodoFilter } from './state/todo.model';
import { selectTodosView } from './state/todo.selectors';

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
      this.store.dispatch(
        TodoPageEvents.addTodoWithIDTriggered(this.newTodoTitle)
      );
      this.newTodoTitle = '';
      form.resetForm();
      form.reset();
    }
  }

  toggleTodo(id: string) {
    this.store.dispatch(TodoPageEvents.toggleTodoTriggered({ id }));
  }

  editTodo(id: string) {
    this.store.dispatch(TodoPageEvents.editTodoTriggered({ id }));
  }

  cancelEditTodo() {
    this.store.dispatch(TodoPageEvents.cancelEditTodoTriggered());
  }

  saveEditTodo(todo: Todo) {
    this.store.dispatch(TodoPageEvents.updateTodoTriggered({ todo }));
  }

  removeTodo(id: string) {
    this.store.dispatch(TodoPageEvents.removeTodoTriggered({ id }));
  }

  removeDoneTodos() {
    this.store.dispatch(TodoPageEvents.removeDoneTodosTriggered());
  }

  setTodoFilter(todoFilter: TodoFilter) {
    this.store.dispatch(TodoPageEvents.todosFilterChanged({ todoFilter }));
  }
}
