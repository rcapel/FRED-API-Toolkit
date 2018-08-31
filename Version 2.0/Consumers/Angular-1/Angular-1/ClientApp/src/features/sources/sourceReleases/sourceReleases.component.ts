import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'sourceReleases',
  templateUrl: './sourceReleases.component.html'
})
export class SourceReleasesComponent implements OnInit {

  heading: string = "Source Releases";

  // request arguments
  sourceId: number;

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
      this.sourceId = +data.get("id");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['sourceReleases']);
    }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.releases = data.container.releases;
  }

  onSubmit() {
    this.router.navigate(["/sourceReleases/" + this.sourceId]);
  }

}
