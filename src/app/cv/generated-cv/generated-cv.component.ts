import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-generated-cv',
  templateUrl: './generated-cv.component.html',
  styleUrls: ['./generated-cv.component.scss']
})
export class GeneratedCvComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            console.log(params["firstname"]);
            console.log(params["lastname"]);
        });
    }

  ngOnInit() {
  }

}
