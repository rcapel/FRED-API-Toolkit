import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'seriesOrderBy' })
export class SeriesOrderByPipe implements PipeTransform {

  names: string[] = ["series_id", "title", "units", "frequency", "seasonal_adjustment",
    "realtime_start", "realtime_end", "last_updated", "observation_start", "observation_end", "popularity", "group_popularity"];

  transform(value: number): string {
    return this.names[value]
  }

}
