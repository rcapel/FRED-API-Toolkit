import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeriesResponse, ISeriesContainer, ISeries } from '../../../fredapi/series/series.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'categorySeries',
  templateUrl: './categorySeries.component.html'
})
export class CategorySeriesComponent implements OnInit {

  heading: string = "Category Series";

  // request arguments
  categoryId: number;
  startDate: string;
  endDate: string;
  title: string;

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
      this.categoryId = +data.get("id");
    });
    this.route.queryParamMap.subscribe(data => {
      this.startDate = data.get("realtime_start");
      this.endDate = data.get("realtime_end");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['categorySeries']);
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
