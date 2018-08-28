import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'vintageDatesOrderBy' })
export class VintageDatesOrderByPipe implements PipeTransform {

  names: string[] = ["vintage_date"];

  transform(value: number): string {
    return this.names[value]
  }

}
