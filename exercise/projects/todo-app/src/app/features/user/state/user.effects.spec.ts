import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { createSpyObj } from 'jest-createspyobj';

import { UserEffects } from './user.effects';
import { UserIntegrationService } from '../services/user-integration.service';
import { loadUsers } from './user.actions';

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

    effects = TestBed.get<UserEffects>(UserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('loads users', () => {
    scheduler.run(helpers => {
      const { expectObservable, hot, cold } = helpers;

      actions$ = hot('--a-', { a: loadUsers() });

      userIntegrationServiceMock.load.mockReturnValue(cold('--a|', { a: [] }));

      expectObservable(effects.loadUsers$).toBe('----a', {
        a: {
          type: '[User API] Load Users Success',
          users: []
        }
      });
    });
  });

  it('it delivers correct (second) response even if first one comes in as last', () => {
    scheduler.run(helpers => {
      const { expectObservable, hot, cold } = helpers;

      actions$ = hot('ab', { a: loadUsers(), b: loadUsers() });

      userIntegrationServiceMock.load.mockReturnValueOnce(
        cold('------a|', { a: [] })
      );
      userIntegrationServiceMock.load.mockReturnValueOnce(
        cold('---a|', { a: [{ id: 1, username: 'tester' }] })
      );

      expectObservable(effects.loadUsers$).toBe('----a', {
        a: {
          type: '[User API] Load Users Success',
          users: [{ id: 1, username: 'tester' }]
        }
      });
    });
  });
});
