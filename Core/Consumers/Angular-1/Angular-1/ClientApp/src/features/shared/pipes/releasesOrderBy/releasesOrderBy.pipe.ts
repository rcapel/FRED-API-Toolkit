import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'releasesOrderBy' })
export class ReleasesOrderByPipe implements PipeTransform {

  names: string[] = ["release_id", "name", "press_release", "realtime_start", "realtime_end"];

  transform(value: number): string {
    return this.names[value]
  }

}
