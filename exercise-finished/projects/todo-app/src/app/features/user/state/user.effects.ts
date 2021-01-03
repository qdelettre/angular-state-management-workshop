import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';

import * as UserActions from './user.actions';
import { UserIntegrationService } from '../services/user-integration.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userIntegrationService: UserIntegrationService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() =>
        this.userIntegrationService.load().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error =>
            of(
              UserActions.loadUsersFailure({
                error: `Loading users failed: ${error}`
              })
            )
          )
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      concatMap(({ username, name, surname }) =>
        this.userIntegrationService.create({ username, name, surname }).pipe(
          map(user => UserActions.createUserSuccess({ user })),
          catchError(error =>
            of(
              UserActions.createUserFailure({
                error: `Create user failed: ${error}`
              })
            )
          )
        )
      )
    )
  );

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.editUserSave),
      concatMap(({ user }) =>
        this.userIntegrationService.update(user).pipe(
          map(editedUser =>
            UserActions.editUserSaveSuccess({ user: editedUser })
          ),
          catchError(error =>
            of(
              UserActions.editUserSaveFailure({
                error: `Edit user failed: ${error}`
              })
            )
          )
        )
      )
    )
  );

  removeUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.removeUser),
      concatMap(({ id }) =>
        this.userIntegrationService.remove(id).pipe(
          map(() => UserActions.removeUserSuccess({ id })),
          catchError(error =>
            of(
              UserActions.removeUserFailure({
                error: `Removing user failed: ${error}`
              })
            )
          )
        )
      )
    )
  );
}
