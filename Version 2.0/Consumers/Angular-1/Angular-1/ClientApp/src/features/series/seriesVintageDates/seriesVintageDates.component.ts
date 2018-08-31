import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IVintageDateContainer } from '../../../fredapi/series/seriesVintageDates.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'seriesVintageDates',
  templateUrl: './seriesVintageDates.component.html'
})
export class SeriesVintageDatesComponent implements OnInit {

  heading: string = "Series Vintage Dates";

  // request arguments
  seriesId: string;

  // response
  response: IContainerExtensions;
  container: IVintageDateContainer;
  vintageDates: Date[];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.seriesId = data.get("id");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['seriesVintageDates']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.vintageDates = data.container && data.container.vintage_dates;
  }

  onSubmit() {
    this.router.navigate(["/seriesVintageDates/" + this.seriesId]);
  }

}
