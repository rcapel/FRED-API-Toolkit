import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISourceContainer, ISource } from '../../../fredapi/sources/source.interfaces';
//import { IReleaseResponse, IRelease } from '../../../fredapi/releases/release.interfaces';

@Component({
  selector: 'releaseSources',
  templateUrl: './releaseSources.component.html'
})
export class ReleaseSourcesComponent implements OnInit {

  heading: string = "ReleaseSources";

  // request arguments
  releaseId: number;

  // response
  container: ISourceContainer;
  sources: ISource[];
  fetchMessage: string;
  url: string;

  showPressRelease: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.releaseId = +data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['releaseSources']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.container = data.container;
    this.sources = data.container.sources;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/releaseSources/" + this.releaseId]);
  }

}
