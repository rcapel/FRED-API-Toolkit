import { Component, Input } from '@angular/core';

@Component({
  selector: 'startEndValues',
  templateUrl: './startEndValues.component.html'
})
export class StartEndValuesComponent {

  @Input() realtime_start: Date;
  @Input() realtime_end: Date;

}
