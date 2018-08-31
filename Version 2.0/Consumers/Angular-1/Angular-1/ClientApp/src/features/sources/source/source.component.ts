import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISourceContainer, ISource } from '../../../fredapi/sources/source.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'source',
  templateUrl: './source.component.html'
})
export class SourceComponent implements OnInit {

  heading: string = "Source";

  // request arguments
  sourceId: number;

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
      this.sourceId = +data.get("id");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['source']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.sources = data.container.sources;
  }

  onSubmit() {
    this.router.navigate(["/source/" + this.sourceId]);
  }

}
