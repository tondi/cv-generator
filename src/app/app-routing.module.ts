import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from '@app/settings';
import { GeneratedCvComponent } from '@app/cv/generated-cv/generated-cv.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data: { title: 'app.menu.settings' }
    },
    {
        path: 'cv-export',
        loadChildren: 'app/cv/cv.module#CvModule'
    },
    {
        path: 'examples',
        loadChildren: 'app/examples/examples.module#ExamplesModule'
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];

@NgModule({
    // useHash supports github.io demo page, remove in your app
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
