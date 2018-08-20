import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITagResponse, ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { TagsOrderByPipe } from '../../shared/pipes/tagsOrderBy/tagsOrderBy.pipe';

@Component({
  selector: 'seriesSearchRelatedTags',
  templateUrl: './seriesSearchRelatedTags.component.html'
})
export class SeriesSearchRelatedTagsComponent implements OnInit {

  heading: string = "SeriesSearchRelatedTags";

  // request arguments
  seriesId: string;
  startDate: string;
  endDate: string;

  // response
  container: ITagContainer;
  tags: ITag[];
  fetchMessage: string;
  url: string;

  orderByAsString: string;

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
      this.parseData(data['seriesSearchRelatedTags']);
    }
    );
  }

  parseData(data) {
    console.log(data);
    this.container = data.container;
    this.tags = data.container.tags;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;

    this.orderByAsString = new TagsOrderByPipe().transform(this.container.order_by);
  }

  onSubmit() {
    this.router.navigate(["/seriesSearchRelatedTags/" + this.seriesId]);
  }

}
