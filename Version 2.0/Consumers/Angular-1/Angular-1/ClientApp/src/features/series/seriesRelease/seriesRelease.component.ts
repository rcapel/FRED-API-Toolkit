import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';

@Component({
  selector: 'seriesRelease',
  templateUrl: './seriesRelease.component.html'
})
export class SeriesReleaseComponent implements OnInit {

  heading: string = "SeriesRelease";

  // request arguments
  seriesId: string;

  // response
  container: IReleaseContainer;
  releases: IRelease[];
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
      this.parseData(data['seriesRelease']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.container = data.container;
    this.releases = data.container.releases;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/seriesRelease/" + this.seriesId]);
  }

}
