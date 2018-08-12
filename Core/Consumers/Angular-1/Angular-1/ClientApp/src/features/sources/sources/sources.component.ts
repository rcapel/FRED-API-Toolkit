import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SourcesService } from '../../../fredapi/sources/sources.service';
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
    private service: SourcesService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    //this.fetch();

    // use the resolver's data instead of fetchng it here:
    this.route.data.subscribe(
      data => {
        console.log(data['sources']);
        this.parseData(data['sources']);
      }
    );
  }

  //fetch() {
  //  this.service.get().subscribe(
  //    data => {
  //      console.log(data);
  //      this.parseData(data);
  //    },
  //    error => {
  //      console.log(error);
  //    },
  //    () => { /*complete*/ }
  //  );
  //}

  parseData(data) {
    this.container = data.container;

    this.sources = data.container.sources;

    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

}
