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
