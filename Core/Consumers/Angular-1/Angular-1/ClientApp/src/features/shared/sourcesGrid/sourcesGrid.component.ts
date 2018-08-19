import { Component, Input } from '@angular/core';

import { ISource } from '../../../fredapi/sources/source.interfaces';

@Component({
  selector: 'sourcesGrid',
  templateUrl: './sourcesGrid.component.html'
})
export class SourcesGridComponent<T> {

  @Input() sources: ISource[];
  @Input() press_release: boolean = false;

}
