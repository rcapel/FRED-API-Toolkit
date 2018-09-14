import { Component, Input } from '@angular/core';

import { ITag } from '../../../../fredapi/tags/tag.interfaces';

@Component({
  selector: 'tagsGridDetail',
  templateUrl: './tagsGridDetail.component.html'
})
export class TagsGridDetailComponent {
  @Input() tag: ITag;

}
