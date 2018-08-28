import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortOrder' })
export class SortOrderPipe implements PipeTransform {

  names: string[] = ["asc", "desc"];

  transform(value: number): string {
    return this.names[value]
  }

}
