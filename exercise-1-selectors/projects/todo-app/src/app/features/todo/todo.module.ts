import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';

import * as fromTodo from './state/todo.reducer';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';

@NgModule({
  declarations: [TodoComponent, TodoItemComponent, TodoEditorComponent],
  imports: [
    SharedModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer)
  ]
})
export class TodoModule {}
