import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { createSpyObj } from 'jest-createspyobj';

import { UserEffects } from './user.effects';
import { UserIntegrationService } from '../services/user-integration.service';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './user.actions';

describe('UserEffects', () => {
  let scheduler: TestScheduler;
  let actions$: Observable<any>; // tslint:disable-line
  let effects: UserEffects;
  let userIntegrationServiceMock: jest.Mocked<UserIntegrationService>;

  beforeEach(() => {
    userIntegrationServiceMock = createSpyObj<UserIntegrationService>(
      UserIntegrationService,
      ['load']
    );
    scheduler = new TestScheduler((actual, expected) =>
      expect(actual).toStrictEqual(expected)
    );
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        {
          provide: UserIntegrationService,
          useValue: userIntegrationServiceMock
        }
      ]
    });

    effects = TestBed.inject(UserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('loads users with successful backend request', () => {
    // TODO 8: implement "loadUsers$" effect test, start by using "scheduler.run(helpers => {})" (whole test runs in scheduler)
    // TODO 9: retrieve "expectObservable", "hot" and "cold" helper functions from "helpers" (try to use destructuring)
    // TODO 10: mock value of "actions$" stream using "hot" helper... the stream should emit some empty frames followed by event "a", the variable was already defined at the beginning of the test
    // TODO 11: pass in object as a second parameter of "hot", object will contain "a" property (based on "a" event) with the desired action
    // this action will be then emitted in test
    // TODO 12: use "mockReturnValue" on the "load" method of the "userIntegrationServiceMock"
    // TODO 13: the mocked return value should be "cold" observable which emits some empty frames followed by event "a" and then completes "|"
    // TODO 14: pass in object as a second parameter of "cold", object will contain "a" property (based on "a" event) with the desired service response ( users array )
    // TODO 15: use "expectObservable" and pass in "effects.loadUsers$" effect and expect it "toBe" stream with sum of empty frames of previous 2 streams followed by "a" event
    // TODO 16: pass in object as a second parameter of "toBe", object will contain "a" property (based on "a" event) with expected result success action with appropriate payload (because backend request succeeded)
  });

  it('loads users with failed backend request', () => {
    // TODO 17: implement "loadUsers$" effect test for failed backend request
  });

  it('it delivers correct (second) response even if first one comes in as last', () => {
    // TODO 18: BONUS exercise - effects with switchMap (race conditions)
    // similar to "loads users with successful backend request" but we will emit TWO "loadUsers()" actions, eg hot('-a-b', { a: loadUsers(), b: loadUsers() })
    // then we will also mock TWO backend responses (calling "mockReturnValueOnce" TWO times) with two DIFFERENT responses
    // make sure that the FIRST backend response takes MUCH LONGER time than the SECOND backend response (using more - or even 100ms in the marble syntax)
    // test if the received "loadUsersSuccess" delivers payload of the SECOND backend request
    // try to replace "switchMap" inside of the effect implementation with "mergeMap" and see what happens to the test
  });
});
