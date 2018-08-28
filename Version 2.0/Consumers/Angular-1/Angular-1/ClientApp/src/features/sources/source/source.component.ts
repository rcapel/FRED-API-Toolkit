import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ISourceContainer, ISource } from '../../../fredapi/sources/source.interfaces';

@Component({
  selector: 'source',
  templateUrl: './source.component.html'
})
export class SourceComponent implements OnInit {

  heading: string = "Source";

  // request arguments
  sourceId: number;

  // response
  container: ISourceContainer;
  sources: ISource[];
  fetchMessage: string;
  url: string;

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
    this.container = data.container;
    this.sources = data.container.sources;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/source/" + this.sourceId]);
  }

}
