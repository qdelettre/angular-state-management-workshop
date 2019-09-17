import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';

import * as fromUser from './state/user.reducer';
import { UserEffects } from './state/user.effects';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserEditorComponent } from './user-editor/user-editor.component';

@NgModule({
  declarations: [UserComponent, UserItemComponent, UserEditorComponent],
  imports: [
    SharedModule,
    UserRoutingModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule {}
