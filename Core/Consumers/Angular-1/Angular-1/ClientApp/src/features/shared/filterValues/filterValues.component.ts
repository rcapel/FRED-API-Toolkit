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

  @Input() excludeStartDate: string = "false";
  @Input() excludeEndDate: string = "false";
  @Input() excludeOrderBy: string = "false";
  @Input() excludeSortOrder: string = "false";
  @Input() excludeCount: string = "false";
  @Input() excludeOffset: string = "false";
  @Input() excludeLimit: string = "false";

}
