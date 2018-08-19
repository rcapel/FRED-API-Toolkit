import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITagResponse, ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { TagsOrderByPipe } from '../../shared/pipes/tagsOrderBy/tagsOrderBy.pipe';

@Component({
  selector: 'categoryRelatedTags',
  templateUrl: './categoryRelatedTags.component.html'
})
export class CategoryRelatedTagsComponent implements OnInit {

  heading: string = "CategoryRelatedTags";

  // request arguments
  categoryId: number;
  tagNames: string;
  startDate: string;
  endDate: string;

  // response
  container: ITagContainer;
  tags: ITag[];
  orderByAsString: string;
  fetchMessage: string;
  url: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.categoryId = +data.get("id");
      this.tagNames = data.get("tag_names");
    });
    this.route.queryParamMap.subscribe(data => {
      //this.startDate = data.get("realtime_start");
      //this.endDate = data.get("realtime_end");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['categoryRelatedTags']);
    }
    );
  }

  parseData(data) {
    console.log(data);
    this.container = data.container;
    this.tags = data.container.tags;
    this.orderByAsString = new TagsOrderByPipe().transform(this.container.order_by);
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/categoryRelatedTags/" + this.categoryId + "/" + this.tagNames]);
  }

}
