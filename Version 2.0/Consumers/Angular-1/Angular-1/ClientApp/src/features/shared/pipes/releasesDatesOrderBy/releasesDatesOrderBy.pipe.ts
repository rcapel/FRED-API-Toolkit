import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'releasesDatesOrderBy' })
export class ReleasesDatesOrderByPipe implements PipeTransform {

  names: string[] = ["release_date", "release_id", "release_name"];

  transform(value: number): string {
    return this.names[value]
  }

}
