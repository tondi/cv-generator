import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'create-cv',
        pathMatch: 'full'
    },
    {
        path: 'create-cv',
        loadChildren: 'app/cv/cv.module#CvModule'
    },
    {
        path: '**',
        redirectTo: 'create-cv'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
