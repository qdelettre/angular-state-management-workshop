import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Todo } from '../state/todo.model';

@Component({
  selector: 'todo-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent implements OnInit, OnChanges {
  @Input() todo: Todo;
  @Output() save = new EventEmitter<Todo>();
  @Output() cancel = new EventEmitter<void>();

  editedTodo: Todo;

  constructor() {}

  ngOnInit() {
    this.editedTodo = { ...this.todo };
  }

  ngOnChanges() {
    this.editedTodo = { ...this.todo };
  }

  onSave(form: NgForm) {
    if (form.valid) {
      this.save.emit(this.editedTodo);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
