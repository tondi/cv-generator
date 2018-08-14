import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from '@app/static/static-routing.module';
import { AboutComponent } from '@app/static/about/about.component';
import { FeaturesComponent } from '@app/static/features/features.component';

@NgModule({
    imports: [SharedModule, StaticRoutingModule],
    declarations: [AboutComponent, FeaturesComponent]
})
export class StaticModule {}
