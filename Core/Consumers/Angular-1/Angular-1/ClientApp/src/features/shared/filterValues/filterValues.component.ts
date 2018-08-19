import { Component, Input } from '@angular/core';

@Component({
  selector: 'filterValues',
  templateUrl: './filterValues.component.html'
})
export class FilterValuesComponent {

  @Input() realtime_start: Date;
  @Input() realtime_end: Date;
  @Input() order_by: string;
  @Input() sort_order: number;
  @Input() count: number;
  @Input() offset: number;
  @Input() limit: number;

  @Input() excludeStartDate: boolean = false;
  @Input() excludeEndDate: boolean = false;
  @Input() excludeOrderBy: boolean = false;
  @Input() excludeSortOrder: boolean = false;
  @Input() excludeCount: boolean = false;
  @Input() excludeOffset: boolean = false;
  @Input() excludeLimit: boolean = false;

}
