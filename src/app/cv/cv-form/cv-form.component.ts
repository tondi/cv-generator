import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
// import { ActionCvPersist, ActionCvUpdate, CvState } from '@app/cv/cv.reducer';
import { SectionTypes } from '@app/cv/generated-cv/generated-cv.component';
// import { CvModel } from '@app/cv/models/cv.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormGroupState, ResetAction, SetValueAction } from 'ngrx-forms';
import {
    FormValue,
    State,
    SetSubmittedValueAction,
    INITIAL_STATE
} from '@app/cv/cv.reducer';
import { map, take } from 'rxjs/operators';

@Component({
    selector: 'app-cv-form',
    templateUrl: './cv-form.component.html',
    styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {
    sectionTypes = SectionTypes;

    formState$: Observable<FormGroupState<FormValue>>;
    submittedValue$: Observable<FormValue | undefined>;

    constructor(private store: Store<State>) {
        this.formState$ = store.pipe(select(s => s.simpleForm.formState));
        this.submittedValue$ = store.pipe(
            select(s => s.simpleForm.submittedValue)
        );
    }

    reset() {
        this.store.dispatch(
            new SetValueAction(INITIAL_STATE.id, INITIAL_STATE.value)
        );
        this.store.dispatch(new ResetAction(INITIAL_STATE.id));
    }

    submit() {
        this.formState$
            .pipe(take(1), map(fs => new SetSubmittedValueAction(fs.value)))
            .subscribe(this.store);
    }

    ngOnInit() {}
}
