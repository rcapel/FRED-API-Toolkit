import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'release',
  templateUrl: './release.component.html'
})
export class ReleaseComponent implements OnInit {

  heading: string = "Release";

  // request arguments
  releaseId: number;

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
      this.releaseId = +data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['release']);
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
    this.router.navigate(["/release/" + this.releaseId]);
  }

}
