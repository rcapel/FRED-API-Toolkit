import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseDatesContainer, IReleaseDate } from '../../../fredapi/releases/releaseDates.interfaces';
import { ReleasesOrderByPipe } from '../../shared/pipes/releasesOrderBy/releasesOrderBy.pipe';

@Component({
  selector: 'releaseDates',
  templateUrl: './releaseDates.component.html'
})
export class ReleaseDatesComponent implements OnInit {

  heading: string = "ReleaseDates";

  // request arguments
  releaseId: number;

  // response
  container: IReleaseDatesContainer<IReleaseDate>;
  releaseDates: IReleaseDate[];
  orderByAsString: string;
  showReleaseName: boolean = false;
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
    this.container = data.container;
    console.log(this.container);
    this.releaseDates = this.container.release_dates;
    this.orderByAsString = new ReleasesOrderByPipe().transform(this.container.order_by);
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/releaseDates/" + this.releaseId]);
  }

}
