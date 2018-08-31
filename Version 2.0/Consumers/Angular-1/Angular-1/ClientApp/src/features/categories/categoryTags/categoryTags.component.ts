import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'categoryTags',
  templateUrl: './categoryTags.component.html'
})
export class CategoryTagsComponent implements OnInit {

  heading: string = "Category Tags";

  // request arguments
  categoryId: number;
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
    this.response = data;
    this.container = data.container;
    this.tags = data.container && data.container.tags;
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
