import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneratedCvComponent } from './generated-cv/generated-cv.component';

const routes: Routes = [
    {
        path: '**',
        component: GeneratedCvComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CvRoutingModule {}
