import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeriesContainer, ISeries } from '../../../fredapi/series/series.interfaces';

@Component({
  selector: 'releaseSeries',
  templateUrl: '../../series/series/series.component.html'
})
export class ReleaseSeriesComponent implements OnInit {

  heading: string = "ReleaseSeries";

  // request arguments
  releaseId: number;

  // response
  container: ISeriesContainer;
  series: ISeries[];
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
        this.parseData(data['releaseSeries']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.container = data.container;
    this.series = data.container.seriess;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/releaseSeries/" + this.releaseId]);
  }

}
