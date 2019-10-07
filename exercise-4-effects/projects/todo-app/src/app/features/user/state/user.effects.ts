import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';

import * as UserActions from './user.actions';
import { UserIntegrationService } from '../services/user-integration.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userIntegrationService: UserIntegrationService
  ) {}

  // TODO 1: create "loadUsers$" using "createEffect" NgRx factory
  loadUsers$ = undefined;

  // TODO 2: effect is an arrow function which returns a stream of "actions$" with additional operators in pipe

  // TODO 3: use "ofType" operator to only apply this effect to the "loadUser" actions

  // TODO 4: use correct flattening operator (we're retrieving data from backend API)

  // TODO 5: make a "load" request using "userIntegrationService" which returns an array of users

  // TODO 6: in case of success, map the response into "loadUsersSuccess" (in nested pipe)

  // TODO 7: in case of error, handle the error using "catchError" and return Observable ( of() )"loadUsersFailure"

  // let's review what you have until now together, also the 8th step is in user.module.ts file

  // TODO 9: implement steps 1 - 7 for "createUser$" effect (works very similarly, mind using correct flattening stream operator)
  createUser$ = undefined;

  // TODO 10: implement steps 1 - 7 for "editUser$" effect (works very similarly, mind using correct flattening stream operator)
  editUser$ = undefined;

  // TODO 11: implement steps 1 - 7 for "removeUser$" effect (works very similarly, mind using correct flattening stream operator)
  removeUser$ = undefined;

  // TODO 12: for "loadUsers$": inject store into the service

  // TODO 13: for "loadUsers$": add additional "concatMap" after "ofType" operator

  // TODO 14: for "loadUsers$": the "concatMap" will return the stream of original action piped into "withLatestFrom"

  // TODO 15: for "loadUsers$": the "withLatestFrom" will retrieve isAdmin value from store using a selector

  // TODO 17: for "loadUsers$": the stream will be changed from "action" to "[action, isAdmin]", please update following operators accordingly

  // TODO 18: for "loadUsers$": pass "isAdmin" into the integration service "load()" method

  // TODO 19: let's explore what would happen if we make backend request fail (we can use "throwError" instead of service call) and comment out "catchError" handler

  // TODO 20: now try to add "{ resubscribeOnError: false }" as a second parameter of "createEffect" and try to create couple of user

  // this demonstrates how NgRx 8 by default re-subscribes failed streams to perform subsequent requests instead of finishing effect stream
  // but it's still very important to properly handle errors in NESTED streams ( .pipe() on the service call )

  // try to move error handling login to the top level stream
  // the stream will be completed because we use "of()" operator which emits value and completes which will complete
  // whole effect stream, that way no subsequent request will be performed which is something WE DO NOT WANT
}
