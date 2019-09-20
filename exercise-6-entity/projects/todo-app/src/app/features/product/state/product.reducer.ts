import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Product } from './product.model';
import * as ProductActions from './product.actions';

export const productFeatureKey = 'product';

// TODO 1: create and export "State" interface that extends "EntityState" (from @ngrx/entity) with a generic type of "Product"
export interface State {}

// TODO 2: add additional properties to the "State" interface, "loading" flag, "error" message (or null) and "editedProductId" which can be number (or null)

// TODO 3: define ID selector function for the entity adapter which will accept product and return the id property

// TODO 4: define sort function for the entity adapter, for example sort by product name which will accept 2 arguments of type product and use "localeCompare" on their "name" property

// TODO 5: create entity adapter using "createEntityAdapter" with generic type of "Product" and pass in previously created ID selector and sort function as options
// use IDE code completion to see what properties need to be passed in the options object

export const adapter: EntityAdapter<Product> = undefined;

// TODO 6: use newly created adaper and its "getInitialState" method to create initial state
// pass in options which specify default value of additional state properties (eg loading, ...)
export const initialState: State = undefined;

// TODO 7: create product reducer using "createReducer" method and pass in initial state
const productReducer = undefined;

// TODO 8: create reducer handler ( "on" ) for following actions
// actions: loadProducts, createProduct, updateProduct, removeProduct
// which will set "loading" to true and unset "error" and "editedProductId" values

// TODO 9: create reducer handler ( "on" ) for following actions
// actions: loadProductsFailure, createProductFailure, updateProductFailure, removeProductFailure
// which will set "loading" to false and set "error" and unset "editedProductId" values

// TODO 10: create reducer handler ( "on" ) for "loadProductsSuccess" action which will use "adapter.addAll" method
// the handler should also set "loading" to false and unset "error" and "editedProductId" values

// TODO 11: create reducer handler ( "on" ) for "createProductsSuccess" action which will use "adapter.addOne" method
// the handler should also set "loading" to false and unset "error" and "editedProductId" values

// TODO 12: create reducer handler ( "on" ) for "updateProductsSuccess" action which will use "adapter.updateOne" method
// the handler should also set "loading" to false and unset "error" and "editedProductId" values

// TODO 13: create reducer handler ( "on" ) for "removeProductsSuccess" action which will use "adapter.removeOne" method
// the handler should also set "loading" to false and unset "error" and "editedProductId" values

// TODO 14: create reducer handler ( "on" ) for "editProduct" which sets the "editedProductId"

// TODO 15: create reducer handler ( "on" ) for "editProductCancel" which un-sets the "editedProductId"

// there are more to-do comments in the product.selectors.ts file

export function reducer(state: State | undefined, action: Action) {
  return productReducer(state, action);
}
