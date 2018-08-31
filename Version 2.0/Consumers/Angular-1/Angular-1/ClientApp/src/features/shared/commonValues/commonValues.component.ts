import { Component, Input } from '@angular/core';

import { INameValuePair, IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'commonValues',
  templateUrl: './commonValues.component.html'
})
export class CommonValuesComponent {

  @Input() values: IContainerExtensions;

  get argumentValidationErrors(): INameValuePair[] {
    return this.values.argumentValidationErrors;
  }

}
