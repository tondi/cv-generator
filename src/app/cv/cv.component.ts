import { Component, OnInit } from '@angular/core';
// import { CvState, selectorCv } from '@app/cv/cv.reducer';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { SectionTypes } from '@app/cv/generated-cv/generated-cv.component';
import { FormValue, State } from '@app/cv/cv.reducer';
import { FormGroupState } from 'ngrx-forms';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
    // private unsubscribe$: Subject<void> = new Subject<void>();
    // state: CvState;

    sectionTypes = SectionTypes;
    formState$: Observable<FormGroupState<FormValue>>;

    state = {
        header: {
            fullName: 'Mateusz Tondos',
            image: '',
            resources: [
                {
                    link: 'tondi.pl',
                    icon: 'fas fa-globe-americas'
                },
                {
                    link: 'github.com/tondi',
                    icon: 'fab fa-github'
                },
                {
                    link: 'linkedin.com/in/mtondos',
                    icon: 'fab fa-linkedin-in'
                },
                {
                    link: 'tondi.pl',
                    icon: 'fas fa-globe-americas'
                },
                {
                    link: 'github.com/tondi',
                    icon: 'fab fa-github'
                },
                {
                    link: 'linkedin.com/in/mtondos',
                    icon: 'fab fa-linkedin-in'
                }
            ]
        },
        main: {
            sections: [
                {
                    name: 'Experience',
                    objects: [
                        {
                            type: this.sectionTypes.WithTimespan,
                            name: 'Frontend Developer',
                            description:
                                `Dec2017-present: UsingAngular5, Sass &amp;
                                 Typescript to delive rhi-end shop app for internatonal sports company`,
                            timespan: 'Jun 2017 - present',
                            timespanValue: '1yr 3mos'
                        }
                    ]
                },
                {
                    name: 'Skills',
                    objects: [
                        {
                            name: 'Javascript',
                            proficiency: 'Advanced',
                            description:
                                'ES6+, Typescript, Angular, three.js, mnode.js, socket.io, WebGL (HTML Canvas)'
                        }
                    ]
                }
            ]
        },
        footer: {
            sections: [
                {
                    name: 'Interests',
                    description: 'Guitar, piano, running'
                },
                {
                    name: 'environment',
                    description: 'ES6, Typescript, Angular'
                }
            ],
            consent: `Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji zgodnie z art. 6 ust. 1 lit. a
                Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
                osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych
                oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)`
        }
    };

    constructor(private store: Store<State>) {
        // store
        //     .pipe(select(selectorCv), takeUntil(this.unsubscribe$))
        //     .subscribe(state => (this.state = state));
        this.formState$ = store.pipe(select(s => s.simpleForm.formState));
    }

    ngOnInit() {}

    // ngOnDestroy(): void {
    //     this.unsubscribe$.next();
    //     this.unsubscribe$.complete();
    // }
}
