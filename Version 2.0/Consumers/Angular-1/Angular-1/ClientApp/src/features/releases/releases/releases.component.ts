import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'releases',
  templateUrl: './releases.component.html'
})
export class ReleasesComponent implements OnInit {

  heading: string = "Releases";

  // request arguments

  // response
  response: IContainerExtensions;
  container: IReleaseContainer;
  releases: IRelease[];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
        this.parseData(data['releases']);
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
    this.router.navigate(["/releases"]);
  }

}
