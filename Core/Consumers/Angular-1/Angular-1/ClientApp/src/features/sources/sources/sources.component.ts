import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISourceResponse, ISourceContainer, ISource } from '../../../fredapi/sources/sources.interfaces';

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
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

}
