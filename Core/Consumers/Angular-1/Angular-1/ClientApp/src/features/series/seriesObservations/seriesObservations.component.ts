import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IObservation } from '../../../fredapi/series/seriesObservations.interfaces';

@Component({
  selector: 'seriesObservations',
  templateUrl: './seriesObservations.component.html'
})
export class SeriesObservationsComponent implements OnInit {

  heading: string = "SeriesObservations";

  // request arguments
  seriesId: string;

  // response
  observations: IObservation[];
  fetchMessage: string;
  url: string;

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
    this.observations = data.container.observations;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
}

  onSubmit() {
    this.router.navigate(["/seriesObservations/" + this.seriesId]);
  }

}
