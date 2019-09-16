import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';

import { RouterStateModule } from './router-state/router-state.module';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictStateSerializability: true,
          strictActionImmutability: true,
          strictActionSerializability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    ...(environment.production ? [] : [StoreDevtoolsModule.instrument()]),

    // local
    SharedModule,
    RouterStateModule
  ]
})
export class CoreModule {}
