import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';
import { SourcesOrderByPipe } from '../../shared/pipes/sourcesOrderBy/sourcesOrderBy.pipe';

@Component({
  selector: 'sourceReleases',
  templateUrl: './sourceReleases.component.html'
})
export class SourceReleasesComponent implements OnInit {

  heading: string = "SourceReleases";

  // request arguments
  sourceId: number;

  // response
  container: IReleaseContainer;
  releases: IRelease[];
  fetchMessage: string;
  url: string;

  orderByAsString: string;


  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.sourceId = +data.get("id");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['sourceReleases']);
    }
    );
  }

  parseData(data) {
    console.log(data);
    this.container = data.container;
    this.releases = data.container.releases;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;

    this.orderByAsString = new SourcesOrderByPipe().transform(this.container.order_by);
  }

  onSubmit() {
    this.router.navigate(["/sourceReleases/" + this.sourceId]);
  }

}
