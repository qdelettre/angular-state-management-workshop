import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { routerFeatureKey, routerReducer } from './state/router.reducer';

export * from './state/router.selectors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(routerFeatureKey, routerReducer)
  ]
})
export class RouterStateModule {}
