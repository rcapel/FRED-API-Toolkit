import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeries, ISeriesContainer } from '../../../fredapi/series/series.interfaces';
import { SeriesOrderByPipe } from '../../shared/pipes/seriesOrderBy/seriesOrderBy.pipe';

@Component({
  selector: 'seriesUpdates',
  templateUrl: './seriesUpdates.component.html'
})
export class SeriesUpdatesComponent implements OnInit {

  heading: string = "SeriesUpdates";

  // request arguments
  seriesId: string;

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
      this.seriesId = data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['seriesUpdates']);
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
    this.router.navigate(["/seriesUpdates/" + this.seriesId]);
  }

}
