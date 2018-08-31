import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html'
})
export class TagsComponent implements OnInit {

  heading: string = "Tags";

  // response
  response: IContainerExtensions;
  container: ITagContainer
  tags: ITag[];

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
        this.parseData(data['tags']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.tags = data.container.tags;
  }

}
