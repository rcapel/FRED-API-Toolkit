import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterValue' })
export class FilterValuePipe implements PipeTransform {

  names: string[] = ["all", "macro", "seasonal_adjustment"];

  transform(value: number): string {
    return this.names[value]
  }

}
