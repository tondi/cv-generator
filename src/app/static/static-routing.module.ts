import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '@app/static/about/about.component';
import { FeaturesComponent } from '@app/static/features/features.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        data: { title: 'app.menu.about' }
    },
    {
        path: 'features',
        component: FeaturesComponent,
        data: { title: 'app.menu.features' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaticRoutingModule {}
