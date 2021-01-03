import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectEditedUser,
  selectUsers,
  selectUsersError,
  selectUsersLoading
} from './state/user.selectors';
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
  loading: Observable<boolean>;
  error: Observable<string>;
  users: Observable<User[]>;
  usersEditedUser: Observable<Partial<User> | undefined>;

  newUser: Partial<User> | null = null;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.error = this.store.pipe(select(selectUsersError));
    this.loading = this.store.pipe(select(selectUsersLoading));
    this.users = this.store.pipe(select(selectUsers));
    this.usersEditedUser = this.store.pipe(select(selectEditedUser));

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
