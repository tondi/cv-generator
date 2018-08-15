import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { GeneratedCvComponent } from './generated-cv/generated-cv.component';
import { CvComponent } from './cv.component';
import { CvFormComponent } from '@app/cv/cv-form/cv-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
// import { cvReducer } from '@app/cv/cv.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { NgrxFormsModule } from 'ngrx-forms';
import { reducer } from '@app/cv/cv.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CvRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        // StoreModule.forFeature('cv', cvReducer),
        FormsModule,
        NgrxFormsModule,
        StoreModule.forFeature('simpleForm', reducer)
    ],
    declarations: [GeneratedCvComponent, CvComponent, CvFormComponent],
    exports: [GeneratedCvComponent, CvFormComponent]
})
export class CvModule {}
