import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterValue' })
export class FilterValuePipe implements PipeTransform {

  names: string[] = ["all", "macro", "regional"];

  transform(value: number): string {
    return this.names[value]
  }

}
