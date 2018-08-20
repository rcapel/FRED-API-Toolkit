import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISourceResponse, ISourceContainer, ISource } from '../../../fredapi/sources/source.interfaces';
import { SourcesOrderByPipe } from '../../shared/pipes/sourcesOrderBy/sourcesOrderBy.pipe';

@Component({
  selector: 'sources',
  templateUrl: './sources.component.html'
})
export class SourcesComponent implements OnInit {

  heading: string = "Sources";

  // response
  container: ISourceContainer
  sources: ISource[];
  fetchMessage: string;
  url: string;

  orderByAsString: string;
  showPressRelease: boolean = false;

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        console.log(data['sources']);
        this.parseData(data['sources']);
      }
    );
  }

  parseData(data) {
    this.container = data.container;
    this.sources = data.container.sources;
    this.orderByAsString = new SourcesOrderByPipe().transform(this.container.order_by);
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

}
