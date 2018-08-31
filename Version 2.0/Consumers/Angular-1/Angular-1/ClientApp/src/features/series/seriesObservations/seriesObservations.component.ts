import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeriesObservationsContainer, IObservation } from '../../../fredapi/series/seriesObservations.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'seriesObservations',
  templateUrl: './seriesObservations.component.html'
})
export class SeriesObservationsComponent implements OnInit {

  heading: string = "Series Observations";

  // request arguments
  seriesId: string;

  // response
  response: IContainerExtensions;
  container: ISeriesObservationsContainer;
  observations: IObservation[];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.seriesId = data.get("id");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['seriesObservations']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.observations = data.container && data.container.observations;
}

  onSubmit() {
    this.router.navigate(["/seriesObservations/" + this.seriesId]);
  }

}
