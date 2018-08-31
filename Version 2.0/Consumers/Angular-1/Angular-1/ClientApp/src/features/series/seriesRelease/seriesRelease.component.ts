import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'seriesRelease',
  templateUrl: './seriesRelease.component.html'
})
export class SeriesReleaseComponent implements OnInit {

  heading: string = "Series Release";

  // request arguments
  seriesId: string;

  // response
  response: IContainerExtensions;
  container: IReleaseContainer;
  releases: IRelease[];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.seriesId = data.get("id");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['seriesRelease']);
    }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.releases = data.container && data.container.releases;
  }

  onSubmit() {
    this.router.navigate(["/seriesRelease/" + this.seriesId]);
  }

}
