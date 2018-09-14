import { Component, Input } from '@angular/core';

@Component({
  selector: 'releaseDatesGridHeader',
  templateUrl: './releaseDatesGridHeader.component.html'
})
export class ReleaseDatesGridHeaderComponent {
  @Input() showReleaseName: boolean = true;
}
