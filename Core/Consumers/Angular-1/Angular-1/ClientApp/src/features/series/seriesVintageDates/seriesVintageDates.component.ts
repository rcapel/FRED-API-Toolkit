import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'seriesVintageDates',
  templateUrl: './seriesVintageDates.component.html'
})
export class SeriesVintageDatesComponent implements OnInit {

  heading: string = "SeriesVintageDates";

  // request arguments
  seriesId: string;

  // response
  vintageDates: Date[];
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
        this.parseData(data['seriesCategories']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.vintageDates = data.container.vintage_dates;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/seriesVintageDates/" + this.seriesId]);
  }

}
