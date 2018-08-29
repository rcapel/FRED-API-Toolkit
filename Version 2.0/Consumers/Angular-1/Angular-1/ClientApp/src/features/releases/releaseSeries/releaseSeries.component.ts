import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeriesContainer, ISeries } from '../../../fredapi/series/series.interfaces';
import { SeriesOrderByPipe } from '../../shared/pipes/seriesOrderBy/seriesOrderBy.pipe';

@Component({
  selector: 'releaseSeries',
  templateUrl: './releaseSeries.component.html'
})
export class ReleaseSeriesComponent implements OnInit {

  heading: string = "ReleaseSeries";

  // request arguments
  releaseId: number;

  // response
  container: ISeriesContainer;
  seriess: ISeries[];
  fetchMessage: string;
  url: string;

  orderByAsString: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.releaseId = +data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['releaseSeries']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.container = data.container;
    this.seriess = data.container.seriess;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;

    this.orderByAsString = new SeriesOrderByPipe().transform(this.container.order_by);
  }

  onSubmit() {
    this.router.navigate(["/releaseSeries/" + this.releaseId]);
  }

}
