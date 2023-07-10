import {  createActionGroup, emptyProps, props } from '@ngrx/store';

import { User } from './user.model';

export const UserPageEvents = createActionGroup({
  source: 'User Page',
  events: {
    'Init': emptyProps(),
    'Edit User Triggered': props<{ id: number }>(),
    'Edit User Cancel Triggered': emptyProps(),
    'Edit User Save Triggered': props<{ user: User }>(),
    'Create User Save Triggered': props<{ username: string; name: string; surname: string }>(),
    'Remove User Triggered': props<{ id: number }>(),

  }
});

export const UserApiEvents = createActionGroup({
  source: 'User API',
  events: {
    'Users Loaded Success': props<{ users: User[] }>(),
    'Users Loaded Failure': props<{ error: string }>(),
    'User Removed Success': props<{ id: number }>(),
    'User Removed Failure': props<{ error: string }>(),
    'User Created Success': props<{ user: User }>(),
    'User Created Failure': props<{ error: string }>(),
    'User Updated Success': props<{ user: User }>(),
    'User Updated Failure': props<{ error: string }>(),
  }
})

