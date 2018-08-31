import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISourceResponse, ISourceContainer, ISource } from '../../../fredapi/sources/source.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'sources',
  templateUrl: './sources.component.html'
})
export class SourcesComponent implements OnInit {

  heading: string = "Sources";

  // response
  response: IContainerExtensions;
  container: ISourceContainer
  sources: ISource[];

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.parseData(data['sources']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.sources = data.container.sources;
  }

}
