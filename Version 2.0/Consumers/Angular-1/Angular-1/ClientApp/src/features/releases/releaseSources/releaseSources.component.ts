import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISourceContainer, ISource } from '../../../fredapi/sources/source.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';
//import { IReleaseResponse, IRelease } from '../../../fredapi/releases/release.interfaces';

@Component({
  selector: 'releaseSources',
  templateUrl: './releaseSources.component.html'
})
export class ReleaseSourcesComponent implements OnInit {

  heading: string = "Release Sources";

  // request arguments
  releaseId: number;

  // response
  response: IContainerExtensions;
  container: ISourceContainer;
  sources: ISource[];

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
    this.response = data;
    this.container = data.container;
    this.sources = data.container && data.container.sources;
  }

  onSubmit() {
    this.router.navigate(["/releaseSources/" + this.releaseId]);
  }

}
