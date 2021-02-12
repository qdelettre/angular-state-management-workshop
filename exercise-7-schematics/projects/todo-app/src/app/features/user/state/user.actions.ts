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

export const createUser = createAction(
  '[User Page] Create User',
  props<{ username: string; name: string; surname: string }>()
);

export const createUserSuccess = createAction(
  '[User API] Create User Success',
  props<{ user: User }>()
);

export const createUserFailure = createAction(
  '[User API] Create User Failure',
  props<{ error: string }>()
);

export const editUser = createAction(
  '[User Page] Edit User',
  props<{ id: number }>()
);

export const editUserCancel = createAction('[User Page] Edit User Cancel');

export const editUserSave = createAction(
  '[User Page] Edit User Save',
  props<{ user: User }>()
);

export const editUserSaveSuccess = createAction(
  '[User API] Edit User Success',
  props<{ user: User }>()
);

export const editUserSaveFailure = createAction(
  '[User API] Edit User Failure',
  props<{ error: string }>()
);
