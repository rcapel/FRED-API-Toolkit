import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseDatesContainer, IReleaseDate } from '../../../fredapi/releases/releaseDates.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'releaseDates',
  templateUrl: './releaseDates.component.html'
})
export class ReleaseDatesComponent implements OnInit {

  heading: string = "Release Dates";

  // request arguments
  releaseId: number;

  // response
  response: IContainerExtensions;
  container: IReleaseDatesContainer<IReleaseDate>;
  releaseDates: IReleaseDate[];

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
    this.response = data;
    this.container = data.container;
    this.releaseDates = data.container && data.container.release_dates;
  }

  onSubmit() {
    this.router.navigate(["/releaseDates/" + this.releaseId]);
  }

}
