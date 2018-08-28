import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'aggregationMethod' })
export class AggregationMethodPipe implements PipeTransform {

  names: string[] = ["avg", "sum", "eop"];

  transform(value: number): string {
    return this.names[value]
  }

}
