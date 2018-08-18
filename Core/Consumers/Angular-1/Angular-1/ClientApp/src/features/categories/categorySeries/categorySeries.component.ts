import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeriesResponse, ISeriesContainer, ISeriesItem } from '../../../fredapi/series/series.interfaces';
import { SeriesOrderByPipe } from '../../shared/pipes/seriesOrderBy/seriesOrderBy.pipe';

@Component({
  selector: 'categorySeries',
  templateUrl: './categorySeries.component.html'
})
export class CategorySeriesComponent implements OnInit {

  heading: string = "CategorySeries";

  // request arguments
  categoryId: number;
  startDate: string;
  endDate: string;
  title: string;

  // response
  container: ISeriesContainer;
  series: ISeriesItem[];
  orderByAsString: string;
  fetchMessage: string;
  url: string;

  get orderBy(): string {
    return new SeriesOrderByPipe().transform(this.container.order_by);
  }

  constructor(
    //private service: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.categoryId = +data.get("id");
    });
    this.route.queryParamMap.subscribe(data => {
      this.startDate = data.get("realtime_start");
      this.endDate = data.get("realtime_end");
    });
    this.route.data.subscribe(data => {
      console.log(data['categorySeries']);
      this.parseData(data['categorySeries']);
    }
    );
  }

  parseData(data) {
    this.container = data.container;
    this.series = data.container.seriess;
    this.orderByAsString = new SeriesOrderByPipe().transform(this.container.order_by);
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/categorySeries/" + this.categoryId],
      {
        queryParams:
          {
            realtime_start: this.startDate,
            realtime_end: this.endDate
          }
      });
  }

}
