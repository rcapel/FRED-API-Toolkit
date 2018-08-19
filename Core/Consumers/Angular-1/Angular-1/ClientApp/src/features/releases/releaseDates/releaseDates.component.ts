import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseDatesResponse, IReleaseDate } from '../../../fredapi/releases/releaseDates.interfaces';

@Component({
  selector: 'releaseDates',
  templateUrl: './releaseDates.component.html'
})
export class ReleaseDatesComponent implements OnInit {

  heading: string = "ReleaseDates";

  // request arguments
  releaseId: number;

  // response
  response: IReleaseDatesResponse;
  releaseDates: IReleaseDate[];
  fetchMessage: string;
  url: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.releaseId = +data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['releaseDates']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data.container;
    //this.sources = this.container.releases;
    //this.fetchMessage = data.fetchMessage;
    //this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/release/" + this.releaseId]);
  }

}
