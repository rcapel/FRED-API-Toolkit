import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeries, ISeriesContainer } from '../../../fredapi/series/series.interfaces';
import { SeriesOrderByPipe } from '../../shared/pipes/seriesOrderBy/seriesOrderBy.pipe';

@Component({
  selector: 'tagsSeries',
  templateUrl: './tagsSeries.component.html'
})
export class TagsSeriesComponent implements OnInit {

  heading: string = "TagsSeries";

  // request arguments
  tagNames: string;

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
      this.tagNames = data.get("tag_names");
    });
    this.route.data.subscribe(
      data => {
        this.parseData(data['tagsSeries']);
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
    this.router.navigate(["/tagsSeries/" + this.tagNames]);
  }

}
