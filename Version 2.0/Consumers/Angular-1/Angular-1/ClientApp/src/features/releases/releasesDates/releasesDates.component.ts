import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseDatesContainer, IReleasesDate } from '../../../fredapi/releases/releaseDates.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'releasesDates',
  templateUrl: '../releaseDates/releaseDates.component.html'
})
export class ReleasesDatesComponent implements OnInit {

  heading: string = "Releases Dates";

  // request arguments
  releaseId: number;

  // response
  response: IContainerExtensions;
  container: IReleaseDatesContainer<IReleasesDate>;
  releaseDates: IReleasesDate[];
  showReleaseName: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.releaseId = +data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['releasesDates']);
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
    this.router.navigate(["/releasesDates/" + this.releaseId]);
  }

}
