import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';


@NgModule({
  declarations: [ProductComponent, ProductItemComponent, ProductEditorComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }
