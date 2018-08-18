import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'observationOrderBy' })
export class ObservationOrderByPipe implements PipeTransform {

  names: string[] = ["observation_date"];

  transform(value: number): string {
    return this.names[value]
  }

}
