import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'releaseRelatedTags',
  templateUrl: './releaseRelatedTags.component.html'
})
export class ReleaseRelatedTagsComponent implements OnInit {

  heading: string = "Release Related Tags";

  // request arguments
  releaseId: number;
  tagNames: string;

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
    this.response = data;
    this.container = data.container;
    this.tags = data.container && data.container.tags;
  }

  onSubmit() {
    this.router.navigate(["/releaseRelatedTags/" + this.releaseId + "/" + this.tagNames]);
  }

}
