import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUsersView } from './state/user.selectors';
import { UserPageEvents } from './state/user.actions';
import { User } from './state/user.model';

@Component({
  selector: 'todo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  view$ = this.store.select(selectUsersView);

  newUser: Partial<User> | null = null;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(UserPageEvents.init());
  }

  createNewUser() {
    this.store.dispatch(UserPageEvents.editUserCancelTriggered());
    this.newUser = {};
  }

  createNewUserSave(user: Partial<User>) {
    const { username, name, surname } = user;
    this.store.dispatch(UserPageEvents.createUserSaveTriggered({ username, name, surname }));
    this.newUser = null;
  }

  createNewUserCancel() {
    this.newUser = null;
  }

  editUser(id: number) {
    this.newUser = null;
    this.store.dispatch(UserPageEvents.editUserTriggered({ id }));
  }

  editUserSave(user: User) {
    this.store.dispatch(UserPageEvents.editUserSaveTriggered({ user }));
  }

  editUserCancel() {
    this.store.dispatch(UserPageEvents.editUserCancelTriggered());
  }

  removeUser(id: number) {
    this.store.dispatch(UserPageEvents.removeUserTriggered({ id }));
  }
}
