import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITagResponse, ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { TagsOrderByPipe } from '../../shared/pipes/tagsOrderBy/tagsOrderBy.pipe';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html'
})
export class TagsComponent implements OnInit {

  heading: string = "Tags";

  // response
  container: ITagContainer
  tags: ITag[];
  fetchMessage: string;
  url: string;

  orderByAsString: string;

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
        console.log(data['tags']);
        this.parseData(data['tags']);
      }
    );
  }

  parseData(data) {
    this.container = data.container;
    this.tags = data.container.tags;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;

    this.orderByAsString = new TagsOrderByPipe().transform(this.container.order_by);
  }

}
