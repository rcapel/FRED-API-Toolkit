import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeries, ISeriesContainer } from '../../../fredapi/series/series.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'seriesUpdates',
  templateUrl: './seriesUpdates.component.html'
})
export class SeriesUpdatesComponent implements OnInit {

  heading: string = "Series Updates";

  // request arguments
  seriesId: string;

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
      this.seriesId = data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['seriesUpdates']);
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
    this.router.navigate(["/seriesUpdates/" + this.seriesId]);
  }

}
