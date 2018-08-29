import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { TagsOrderByPipe } from '../../shared/pipes/tagsOrderBy/tagsOrderBy.pipe';

@Component({
  selector: 'releaseRelatedTags',
  templateUrl: './releaseRelatedTags.component.html'
})
export class ReleaseRelatedTagsComponent implements OnInit {

  heading: string = "ReleaseRelatedTags";

  // request arguments
  releaseId: number;
  tagNames: string;

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
      this.releaseId = +data.get("id");
      this.tagNames = data.get("tag_names");
    });
    this.route.data.subscribe(data => {
      this.parseData(data['releaseRelatedTags']);
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
    this.router.navigate(["/releaseRelatedTags/" + this.releaseId + "/" + this.tagNames]);
  }

}
