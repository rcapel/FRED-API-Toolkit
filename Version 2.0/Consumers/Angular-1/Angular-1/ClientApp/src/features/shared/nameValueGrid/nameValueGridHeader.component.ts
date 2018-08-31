import { Component, Input } from '@angular/core';

@Component({
  selector: 'nameValueGridHeader',
  templateUrl: './nameValueGridHeader.component.html'
})
export class NameValueGridHeaderComponent {
  @Input() name: string;
  @Input() value: string;

}
