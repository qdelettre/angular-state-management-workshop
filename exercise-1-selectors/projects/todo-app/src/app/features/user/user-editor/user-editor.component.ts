import { NgForm } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

import { User } from '../state/user.model';

@Component({
  selector: 'todo-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Output() save = new EventEmitter<Partial<User>>();
  @Output() cancel = new EventEmitter<void>();

  editedUser: Partial<User>;

  constructor() {}

  ngOnInit() {
    this.editedUser = { ...this.user };
  }

  ngOnChanges() {
    this.editedUser = { ...this.user };
  }

  onSave(form: NgForm) {
    if (form.valid) {
      this.save.emit(this.editedUser);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
