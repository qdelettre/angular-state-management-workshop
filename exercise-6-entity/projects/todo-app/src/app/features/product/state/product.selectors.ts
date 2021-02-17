import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productFeatureKey, State, adapter } from './product.reducer';

// TODO 16: retrieve all available selectors from "adapter.getSelectors()" (use destructuring)

export const selectProductFeature = createFeatureSelector<State>(
  productFeatureKey
);

// TODO 17: create "selectProductItems" with "createSelector" selecting feature and using "selectAll" selector form adapter
export const selectProductItems = undefined;

// TODO 18: create "selectProductEntities" with "createSelector" selecting feature and using "selectEntities" selector form adapter
export const selectProductEntities = undefined;

// TODO 19: implement selector
export const selectProductEditedProductId = undefined;

// TODO 20: implement selector
export const selectProductLoading = undefined;

// TODO 21: implement selector
export const selectProductError = undefined;

// TODO 22: implement selector
export const selectEditedProduct = undefined;
