import { Component, Input } from '@angular/core';

import { ISeries } from '../../../../fredapi/series/series.interfaces';

@Component({
  selector: 'seriesGridDetail',
  templateUrl: './seriesGridDetail.component.html'
})
export class SeriesGridDetailComponent {
  @Input() series: ISeries;

}
