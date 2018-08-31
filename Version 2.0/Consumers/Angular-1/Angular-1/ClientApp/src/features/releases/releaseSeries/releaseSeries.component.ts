import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeriesContainer, ISeries } from '../../../fredapi/series/series.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'releaseSeries',
  templateUrl: './releaseSeries.component.html'
})
export class ReleaseSeriesComponent implements OnInit {

  heading: string = "Release Series";

  // request arguments
  releaseId: number;

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
      this.releaseId = +data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['releaseSeries']);
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
    this.router.navigate(["/releaseSeries/" + this.releaseId]);
  }

}
