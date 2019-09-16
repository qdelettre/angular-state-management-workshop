import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectUsers,
  selectUsersError,
  selectUsersLoading
} from './state/user.selectors';
import { loadUsers, removeUser } from './state/user.actions';
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

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.error = this.store.pipe(select(selectUsersError));
    this.loading = this.store.pipe(select(selectUsersLoading));
    this.users = this.store.pipe(select(selectUsers));

    this.store.dispatch(loadUsers());
  }

  onRemove(id: number) {
    this.store.dispatch(removeUser({ id }));
  }
}
