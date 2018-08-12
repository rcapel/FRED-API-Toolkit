import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sourcesOrderBy' })
export class SourcesOrderByPipe implements PipeTransform {

  names: string[] = ["source_id", "name", "realtime_start", "realtime_end"];

  transform(value: number): string {
    return this.names[value]
  }

}
