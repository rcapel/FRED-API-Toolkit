import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeriesContainer, ISeries } from '../../../fredapi/series/series.interfaces';
import { SeriesOrderByPipe } from '../../shared/pipes/seriesOrderBy/seriesOrderBy.pipe';

@Component({
  selector: 'seriesSearch',
  templateUrl: './seriesSearch.component.html'
})
export class SeriesSearchComponent implements OnInit {

  heading: string = "SeriesSearch";

  // request arguments
  searchText: string;

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
      this.searchText = data.get("search_text");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['seriesSearch']);
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
    this.router.navigate(["/seriesSearch/" + this.searchText]);
  }

}
