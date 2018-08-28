/// <reference path="../aggregationmethod/aggregationmethod.pipe.ts" />
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterVariable' })
export class FilterVariablePipe implements PipeTransform {

  names: string[] = ["frequency", "units", "seasonal_adjustment"];

  transform(value: number): string {
    return this.names[value]
  }

}
