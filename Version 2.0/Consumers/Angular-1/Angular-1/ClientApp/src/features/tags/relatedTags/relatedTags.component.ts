import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'relatedTags',
  templateUrl: './relatedTags.component.html'
})
export class RelatedTagsComponent implements OnInit {

  heading: string = "Related Tags";

  // request arguments
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
      this.tagNames = data.get("tag_names");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['relatedTags']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.tags = data.container.tags;
  }

  onSubmit() {
    this.router.navigate(["/relatedTags/" + this.tagNames]);
  }

}
