import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeriesContainer, ISeries } from '../../../fredapi/series/series.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'seriesSearch',
  templateUrl: './seriesSearch.component.html'
})
export class SeriesSearchComponent implements OnInit {

  heading: string = "Series Search";

  // request arguments
  searchText: string;

  // response
  response: IContainerExtensions;
  container: ISeriesContainer;
  seriess: ISeries[];

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
    this.response = data;
    this.container = data.container;
    this.seriess = data.container && data.container.seriess;
  }

  onSubmit() {
    this.router.navigate(["/seriesSearch/" + this.searchText]);
  }

}
