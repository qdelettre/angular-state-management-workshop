import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, userFeatureKey } from './user.reducer';

const selectUserFeature = createFeatureSelector<State>(userFeatureKey);

export const selectUserView = createSelector(selectUserFeature, state => ({
  ...state,
  users: Object.values(state.items),
  editedUser: state.items[state.editedUserId]
}));
