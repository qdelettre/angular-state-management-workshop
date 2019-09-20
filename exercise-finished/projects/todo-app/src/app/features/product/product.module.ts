import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import * as fromProduct from './state/product.reducer';
import { ProductEffects } from './state/product.effects';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductItemComponent,
    ProductEditorComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule {}
