import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUserView } from './state/user.selectors';
import {
  createUser,
  editUser,
  editUserCancel,
  loadUsers,
  removeUser,
  editUserSave
} from './state/user.actions';
import { User } from './state/user.model';

@Component({
  selector: 'todo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  view$ = this.store.select(selectUserView);

  newUser: Partial<User> | null = null;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }

  createNewUser() {
    this.store.dispatch(editUserCancel());
    this.newUser = {};
  }

  createNewUserSave(user: Partial<User>) {
    const { username, name, surname } = user;
    this.store.dispatch(createUser({ username, name, surname }));
    this.newUser = null;
  }

  createNewUserCancel() {
    this.newUser = null;
  }

  editUser(id: number) {
    this.newUser = null;
    this.store.dispatch(editUser({ id }));
  }

  editUserSave(user: User) {
    this.store.dispatch(editUserSave({ user }));
  }

  editUserCancel() {
    this.store.dispatch(editUserCancel());
  }

  removeUser(id: number) {
    this.store.dispatch(removeUser({ id }));
  }
}
