import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'seriesSearchTags',
  templateUrl: './seriesSearchTags.component.html'
})
export class SeriesSearchTagsComponent implements OnInit {

  heading: string = "Series Search Tags";

  // request arguments
  seriesId: string;
  startDate: string;
  endDate: string;

  // response
  response: IContainerExtensions;
  container: ITagContainer;
  tags: ITag[];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.seriesId = data.get("id");
    });
    this.route.queryParamMap.subscribe(data => {
      //this.startDate = data.get("realtime_start");
      //this.endDate = data.get("realtime_end");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['seriesSearchTags']);
    }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.tags = data.container && data.container.tags;
  }

  onSubmit() {
    this.router.navigate(["/seriesSearchTags/" + this.seriesId]);
  }

}
