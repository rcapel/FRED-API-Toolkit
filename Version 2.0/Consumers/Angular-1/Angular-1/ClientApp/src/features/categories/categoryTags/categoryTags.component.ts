import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITagResponse, ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { TagsOrderByPipe } from '../../shared/pipes/tagsOrderBy/tagsOrderBy.pipe';

@Component({
  selector: 'categoryTags',
  templateUrl: './categoryTags.component.html'
})
export class CategoryTagsComponent implements OnInit {

  heading: string = "CategoryTags";

  // request arguments
  categoryId: number;
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
    });
    this.route.queryParamMap.subscribe(data => {
      //this.startDate = data.get("realtime_start");
      //this.endDate = data.get("realtime_end");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['categoryTags']);
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
    this.router.navigate(["/categoryTags/" + this.categoryId]);
      //{
      //  queryParams:
      //    {
      //      realtime_start: this.startDate,
      //      realtime_end: this.endDate
      //    }
      //});
  }

}
