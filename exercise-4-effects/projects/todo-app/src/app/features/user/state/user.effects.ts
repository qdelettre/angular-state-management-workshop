import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, throwError } from 'rxjs';
import {
  catchError,
  concatMap,
  map,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs/operators';

import { UserIntegrationService } from '../services/user-integration.service';
import {
  createUser,
  createUserFailure,
  createUserSuccess,
  editUserSave,
  editUserSaveFailure,
  editUserSaveSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  removeUser,
  removeUserFailure,
  removeUserSuccess
} from './user.actions';
import { selectIsAdmin } from './user.selectors';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userIntegrationService: UserIntegrationService
  ) {}

  // TODO 1: create "loadUsers$" using "createEffect" NgRx factory
  loadUsers$ = undefined;

  // TODO 2: effect is an arrow function which returns a stream of "actions$" with additional operators in pipe

  // TODO 3: use "ofType" operator to only apply this effect to the "loadUsers" actions

  // TODO 4: use correct flattening operator (we're retrieving data from backend API)

  // TODO 5: make a "load" request using "userIntegrationService" which returns an array of users

  // TODO 6: in case of success, map the response into "loadUsersSuccess" (in nested pipe, relative to service)

  // TODO 7: in case of error, handle the error using "catchError" and return Observable ( "of()" ) "loadUsersFailure"
  // where we will pass in error as string (using ".toString()") (in nested pipe, relative to service)

  // let's review what you have until now together, also the 8th step is in user.module.ts file

  // TODO 9: implement steps 1 - 7 for "createUser$" effect (works very similarly, mind using correct flattening stream operator)
  createUser$ = undefined;

  // TODO 10: implement steps 1 - 7 for "editUserSave$" effect (works very similarly, mind using correct flattening stream operator)
  editUserSave$ = undefined;

  // TODO 11: implement steps 1 - 7 for "removeUser$" effect (works very similarly, mind using correct flattening stream operator)
  removeUser$ = undefined;

  // TODO 12: for "loadUsers$": inject store into the service

  // TODO 13: for "loadUsers$": add additional "concatMap" after "ofType" operator

  // TODO 14: for "loadUsers$": the "concatMap" will return the stream of original action (wrapped with "of()") piped into "withLatestFrom" RxJs operator

  // TODO 15: for "loadUsers$": the "withLatestFrom" will retrieve isAdmin value from store using a selector

  // TODO 17: for "loadUsers$": the stream will be changed from "action" to "[action, isAdmin]", please update following operators accordingly

  // TODO 18: for "loadUsers$": pass "isAdmin" into the integration service "load()" method and check the running application
  // once done and tried in application, please remove isAdmin logic so we again retrieve all users...

  // TODO 19: let's explore error handling of the createUser$" stream, first lets add new last operator "tap(v => console.log('tap next', v), err => console.error('tap error', err), () => console.log('tap done'))" to its .pipe()

  // TODO 20: let's explore what would happen if we make "createUser$" backend request fail (we can use "throwError" RxJs operator instead of service call and pass in "new Error('404')")
  // let's try to create couple of users after that change (check out Chrome dev tools console)

  // TODO 21: now try to comment out "catchError" part and try to create couple of users and check the console
  // we should get error from tap() followed by real error
  // NgRx will automatically re-subscribe our crashed effect stream and further user creation will lead to more such errors

  // TODO 22: try un-comment the "catchError" part and to move it to the top level stream ( from service pipe to parent pipe, just before tap )
  // the stream will be completed because we use "of()" operator which emits value and completes which will complete
  // whole effect stream, that way no subsequent request will be performed which is something WE DO NOT WANT
  // TIP: ALWAYS handle errors in the nested pipe (of the service) inside of the flattening operator
}
