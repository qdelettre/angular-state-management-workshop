import { createAction, props } from '@ngrx/store';

import { User } from './user.model';

export const loadUsers = createAction('[User Page] Load Users');

export const loadUsersSuccess = createAction(
  '[User API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User API] Load Users Failure',
  props<{ error: string }>()
);

export const removeUser = createAction(
  '[User Page] Remove User',
  props<{ id: number }>()
);

export const removeUserSuccess = createAction(
  '[User API] Remove User Success',
  props<{ id: number }>()
);

export const removeUserFailure = createAction(
  '[User API] Remove User Failure',
  props<{ error: string }>()
);
