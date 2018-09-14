import { Component, Input } from '@angular/core';

import { IReleaseDate } from '../../../../fredapi/releases/releaseDates.interfaces';

@Component({
  selector: 'releaseDatesGridDetail',
  templateUrl: './releaseDatesGridDetail.component.html'
})
export class ReleaseDatesGridDetailComponent {
  @Input() releaseDate: IReleaseDate;
  @Input() showReleaseName: boolean = true;

}
