import { Component, Input } from '@angular/core';

import { IFilters } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'filterValues',
  templateUrl: './filterValues.component.html'
})
export class FilterValuesComponent {

  @Input() values: IFilters;
  @Input() orderByType: string;

  @Input() showStartDate: boolean = true;
  @Input() showEndDate: boolean = true;
  @Input() showOrderBy: boolean = true;
  @Input() showSortOrder: boolean = true;
  @Input() showCount: boolean = true;
  @Input() showOffset: boolean = true;
  @Input() showLimit: boolean = true;
  @Input() showUnits: boolean = false;
  @Input() showOutputType: boolean = false;
  @Input() showFileType: boolean = false;

}
