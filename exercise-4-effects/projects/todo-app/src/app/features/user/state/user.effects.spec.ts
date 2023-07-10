import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { createSpyObj } from 'jest-createspyobj';

import { UserEffects } from './user.effects';
import { UserIntegrationService } from '../services/user-integration.service';
import { UserPageEvents, UserApiEvents } from './user.actions';

describe('UserEffects', () => {
  let scheduler: TestScheduler;
  let actions$: Observable<any>;
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

  it('loads users', () => {
    scheduler.run(({ expectObservable, hot, cold }) => {
      actions$ = hot('--a-', { a: UserPageEvents.init() });

      userIntegrationServiceMock.load.mockReturnValue(cold('--a|', { a: [] }));

      expectObservable(effects.loadUsers$).toBe('----a', {
        a: UserApiEvents.usersLoadedSuccess({ users: [] })
      });
    });
  });

  it('handles failed loading', () => {
    scheduler.run(({ expectObservable, hot, cold }) => {
      actions$ = hot('--a-', { a: UserPageEvents.init() });

      userIntegrationServiceMock.load.mockReturnValue(cold('--#|'));

      expectObservable(effects.loadUsers$).toBe('----a', {
        a: UserApiEvents.usersLoadedFailure({ error: 'Loading users failed: error' })
      });
    });
  });

  it('it delivers correct (second) response even if first one comes in as last', () => {
    scheduler.run(({ expectObservable, hot, cold }) => {
      actions$ = hot('ab', { a: UserPageEvents.init(), b: UserPageEvents.init() });

      userIntegrationServiceMock.load.mockReturnValueOnce(
        cold('------a|', { a: [] })
      );
      userIntegrationServiceMock.load.mockReturnValueOnce(
        cold('---a|', {
          a: [{ id: 1, username: 'tester', name: 'Test', surname: 'Tester' }]
        })
      );

      expectObservable(effects.loadUsers$).toBe('----a', {
        a: UserApiEvents.usersLoadedSuccess({
          users: [
            { id: 1, username: 'tester', name: 'Test', surname: 'Tester' }
          ]
        })
      });
    });
  });
});
