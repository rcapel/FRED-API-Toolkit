import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';
import { ReleasesOrderByPipe } from '../../shared/pipes/releasesOrderBy/releasesOrderBy.pipe';

@Component({
  selector: 'releases',
  templateUrl: './releases.component.html'
})
export class ReleasesComponent implements OnInit {

  heading: string = "Releases";

  // request arguments

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
    this.route.data.subscribe(data => {
        this.parseData(data['releases']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.container = data.container;
    this.releases = data.container.releases;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;

    this.orderByAsString = new ReleasesOrderByPipe().transform(this.container.order_by);
  }

  onSubmit() {
    this.router.navigate(["/releases"]);
  }

}
