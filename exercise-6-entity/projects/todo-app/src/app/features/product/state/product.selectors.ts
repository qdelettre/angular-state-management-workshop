import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productFeatureKey, State, adapter } from './product.reducer';

// TODO 16: retrieve all available selectors from "adapter.getSelectors()" (use destructuring)

export const selectProductFeature = createFeatureSelector<State>(
  productFeatureKey
);

// TODO 17: create "selectProductsItems" with "createSelector" selecting feature and using "selectAll" selector form adapter
export const selectProductItems = undefined;

// TODO 18: create "selectProductEntities" with "createSelector" selecting feature and using "selectEntities" selector form adapter
export const selectProductEntities = undefined;

// TODO 19: implement selector with help of feature selector and previously created selectors to deliver perfect view state for product component
export const selectProductView = undefined;
