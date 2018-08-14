import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { GeneratedCvComponent } from './generated-cv/generated-cv.component';

@NgModule({
    imports: [CommonModule, CvRoutingModule],
    declarations: [GeneratedCvComponent],
    exports: [GeneratedCvComponent]
})
export class CvModule {}
