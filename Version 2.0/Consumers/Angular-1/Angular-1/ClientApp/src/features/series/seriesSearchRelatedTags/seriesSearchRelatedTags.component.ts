import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'seriesSearchRelatedTags',
  templateUrl: './seriesSearchRelatedTags.component.html'
})
export class SeriesSearchRelatedTagsComponent implements OnInit {

  heading: string = "Series Search Related Tags";

  // request arguments
  searchText: string;
  tagNames: string;
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
      this.searchText = data.get("series_search_text");
      this.tagNames = data.get("tag_names");
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
    this.response = data;
    this.container = data.container;
    this.tags = data.container && data.container.tags;
  }

  onSubmit() {
    this.router.navigate(["/seriesSearchRelatedTags/" + this.searchText + "/" + this.tagNames]);
  }

}
