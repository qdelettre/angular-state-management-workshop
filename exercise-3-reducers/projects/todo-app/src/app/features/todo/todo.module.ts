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
    // TODO 9: add "StoreModule.forFeature" to the imports and pass in arguments it expects
  ]
})
export class TodoModule {}
