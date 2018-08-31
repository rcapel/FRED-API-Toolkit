import { Component, Input } from '@angular/core';

import { INameValuePair } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'nameValueGridDetail',
  templateUrl: './nameValueGridDetail.component.html'
})
export class NameValueGridDetailComponent {
  @Input() nameValuePair: INameValuePair;

}
