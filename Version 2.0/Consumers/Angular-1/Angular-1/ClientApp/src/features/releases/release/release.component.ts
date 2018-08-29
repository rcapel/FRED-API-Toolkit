import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';

@Component({
  selector: 'release',
  templateUrl: './release.component.html'
})
export class ReleaseComponent implements OnInit {

  heading: string = "Release";

  // request arguments
  releaseId: number;

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
      this.releaseId = +data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['release']);
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
    this.router.navigate(["/release/" + this.releaseId]);
  }

}
