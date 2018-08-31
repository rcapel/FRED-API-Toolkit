import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISeries, ISeriesContainer } from '../../../fredapi/series/series.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'tagsSeries',
  templateUrl: './tagsSeries.component.html'
})
export class TagsSeriesComponent implements OnInit {

  heading: string = "Tags Series";

  // request arguments
  tagNames: string;

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
      this.tagNames = data.get("tag_names");
    });
    this.route.data.subscribe(
      data => {
        this.parseData(data['tagsSeries']);
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
    this.router.navigate(["/tagsSeries/" + this.tagNames]);
  }

}
