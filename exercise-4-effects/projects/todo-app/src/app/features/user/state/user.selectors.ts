import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, userFeatureKey } from './user.reducer';

const selectUserFeature = createFeatureSelector<State>(userFeatureKey);

export const selectUsers = createSelector(selectUserFeature, user =>
  Object.values(user.items)
);

export const selectUsersLoading = createSelector(
  selectUserFeature,
  user => user.loading
);

export const selectUsersError = createSelector(
  selectUserFeature,
  user => user.error
);

export const selectEditedUser = createSelector(
  selectUserFeature,
  user => user.items[user.editedUserId]
);

export const selectIsAdmin = createSelector(
  selectUserFeature,
  user => user.isAdmin
);
