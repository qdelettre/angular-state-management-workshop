import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../state/user.model';

@Component({
  selector: 'todo-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Output() edit = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onEdit() {
    this.edit.emit(this.user.id);
  }

  onRemove() {
    this.remove.emit(this.user.id);
  }
}
