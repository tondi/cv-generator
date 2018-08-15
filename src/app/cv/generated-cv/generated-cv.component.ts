import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
// import { CvState } from '@app/cv/cv.reducer';

export enum SectionTypes {
    Regular = 1,
    WithTimespan
}

@Component({
    selector: 'app-generated-cv',
    templateUrl: './generated-cv.component.html',
    styleUrls: ['./generated-cv.component.scss']
})
export class GeneratedCvComponent implements OnInit {
    sectionTypes = SectionTypes;

    @Input() state;

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            console.log(params['firstname']);
            console.log(params['lastname']);
        });
    }

    ngOnInit() {}
}
