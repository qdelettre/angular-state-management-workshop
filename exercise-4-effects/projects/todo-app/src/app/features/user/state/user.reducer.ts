import { Action, createReducer, on } from '@ngrx/store';
import { UserPageEvents, UserApiEvents } from './user.actions';
import { User } from './user.model';

export const userFeatureKey = 'user';

export interface State {
  items: {
    [id: number]: User;
  };
  loading: boolean;
  error: string | null;
  editedUserId: number | null;
  isAdmin: boolean;
}

export const initialState: State = {
  items: {},
  loading: false,
  error: null,
  editedUserId: null,
  isAdmin: true
};

export const userReducer = createReducer(
  initialState,

  on(UserPageEvents.init, state => ({
    ...state,
    loading: true,
    error: null,
    editedUserId: null
  })),

  on(UserApiEvents.usersLoadedSuccess, (state, { users }) => {
    const newState = {
      ...state,
      items: users.reduce((result, user) => {
        result[user.id] = user;
        return result;
      }, {}),
      loading: false,
      error: null,
      editedUserId: null
    };
    return newState;
  }),

  on(UserPageEvents.createUserSaveTriggered, state => ({
    ...state,
    loading: true,
    error: null,
    editedUserId: null
  })),

  on(
    UserApiEvents.userCreatedSuccess,
    (state, { user: { id, username, name, surname } }) => ({
      ...state,
      items: {
        ...state.items,
        [id]: { id, username, name, surname }
      },
      loading: false,
      error: null,
      editedUserId: null
    })
  ),

  on(UserPageEvents.editUserTriggered, (state, { id }) => ({
    ...state,
    editedUserId: id
  })),

  on(UserPageEvents.editUserCancelTriggered, state => ({
    ...state,
    editedUserId: null
  })),

  on(UserPageEvents.editUserSaveTriggered, state => ({
    ...state,
    loading: true,
    error: null,
    editedUserId: null
  })),

  on(
    UserApiEvents.userUpdatedSuccess,
    (state, { user: { id, name, surname, username } }) => ({
      ...state,
      items: {
        ...state.items,
        [id]: { id, name, surname, username }
      },
      loading: false,
      error: null,
      editedUserId: null
    })
  ),

  on(UserPageEvents.removeUserTriggered, state => ({
    ...state,
    loading: true,
    error: null,
    editedUserId: null
  })),

  on(UserApiEvents.userRemovedSuccess, (state, { id }) => {
    const newState = {
      ...state,
      items: {
        ...state.items
      },
      loading: false,
      error: null,
      editedUserId: null
    };
    delete newState.items[id];
    return newState;
  }),

  on(
    UserApiEvents.usersLoadedFailure,
    UserApiEvents.userCreatedFailure,
    UserApiEvents.userUpdatedFailure,
    UserApiEvents.userRemovedFailure,
    (state, { error }) => ({
    ...state,
    loading: false,
    error,
    editedUserId: null
  }))
);
