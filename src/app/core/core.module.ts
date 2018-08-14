import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '@env/environment';

import { debug } from '@app/core/meta-reducers/debug.reducer';
import { initStateFromLocalStorage } from '@app/core/meta-reducers/init-state-from-local-storage.reducer';
import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { authReducer } from '@app/core/auth/auth.reducer';
import { AuthEffects } from '@app/core/auth/auth.effects';
import { AuthGuardService } from '@app/core/auth/auth-guard.service';
import { AnimationsService } from '@app/core/animations/animations.service';
import { TitleService } from '@app/core/title/title.service';

export const metaReducers: MetaReducer<any>[] = [initStateFromLocalStorage];

if (!environment.production) {
    metaReducers.unshift(storeFreeze);
    if (!environment.test) {
        metaReducers.unshift(debug);
    }
}

@NgModule({
    imports: [
        // angular
        CommonModule,
        HttpClientModule,

        // ngrx
        StoreModule.forRoot(
            {
                auth: authReducer
            },
            { metaReducers }
        ),
        EffectsModule.forRoot([AuthEffects]),

        // 3rd party
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [],
    providers: [
        LocalStorageService,
        AuthGuardService,
        AnimationsService,
        TitleService
    ],
    exports: [TranslateModule]
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import only in AppModule'
            );
        }
    }
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(
        http,
        `${environment.i18nPrefix}/assets/i18n/`,
        '.json'
    );
}
