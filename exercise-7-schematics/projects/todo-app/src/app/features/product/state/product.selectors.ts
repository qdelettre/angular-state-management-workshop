import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productFeatureKey, State, adapter } from './product.reducer';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectProductFeature = createFeatureSelector<State>(
  productFeatureKey
);

export const selectProductItems = createSelector(
  selectProductFeature,
  selectAll
);

export const selectProductEntities = createSelector(
  selectProductFeature,
  selectEntities
);

export const selectProductEditedProductId = createSelector(
  selectProductFeature,
  product => product.editedProductId
);

export const selectProductLoading = createSelector(
  selectProductFeature,
  product => product.loading
);

export const selectProductError = createSelector(
  selectProductFeature,
  product => product.error
);

export const selectEditedProduct = createSelector(
  selectProductEntities,
  selectProductEditedProductId,
  (products, id) => products[id]
);
