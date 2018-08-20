import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseDatesContainer, IReleasesDate } from '../../../fredapi/releases/releaseDates.interfaces';
import { ReleasesOrderByPipe } from '../../shared/pipes/releasesOrderBy/releasesOrderBy.pipe';

@Component({
  selector: 'releasesDates',
  templateUrl: '../releaseDates/releaseDates.component.html'
})
export class ReleasesDatesComponent implements OnInit {

  heading: string = "ReleasesDates";

  // request arguments
  releaseId: number;

  // response
  container: IReleaseDatesContainer<IReleasesDate>;
  releaseDates: IReleasesDate[];
  orderByAsString: string;
  showReleaseName: boolean = true;
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
        this.parseData(data['releasesDates']);
      }
    );
  }

  parseData(data) {
    this.container = data.container;
    console.log(this.container);
    this.releaseDates = this.container.release_dates;
    this.orderByAsString = new ReleasesOrderByPipe().transform(this.container.order_by);
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/releasesDates/" + this.releaseId]);
  }

}
