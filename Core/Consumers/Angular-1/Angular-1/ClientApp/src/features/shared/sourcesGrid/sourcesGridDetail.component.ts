import { Component, Input } from '@angular/core';

import { ISource } from '../../../fredapi/sources/source.interfaces';

@Component({
  selector: 'sourcesGridDetail',
  templateUrl: './sourcesGridDetail.component.html'
})
export class SourcesGridDetailComponent {
  @Input() source: ISource;
  @Input() excludePressRelease: boolean = false;

}
