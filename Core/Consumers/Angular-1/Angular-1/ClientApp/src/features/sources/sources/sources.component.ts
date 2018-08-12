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
  realtime_start: Date;
  realtime_end: Date;
  order_by: number;
  sort_order: number;
  count: number;
  offset: number;
  limit: number;

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
    let data = this.route.snapshot.data['sources'];
    this.parseData(data);
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
    this.realtime_start = data.container.realtime_start;
    this.realtime_end = data.container.realtime_end;
    this.order_by = data.container.order_by;
    this.sort_order = data.container.sort_order;
    this.count = data.container.count;
    this.offset = data.container.offset;
    this.limit = data.container.limit;

    this.sources = data.container.sources;

    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

}
