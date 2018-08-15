import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { StaticModule } from '@app/static';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CvModule } from '@app/cv/cv.module';

@NgModule({
    imports: [
        // angular
        BrowserAnimationsModule,
        BrowserModule,

        // core & shared
        CoreModule,
        SharedModule,

        // features
        StaticModule,
        CvModule,

        // app
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
