import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'seriesSearchOrderBy' })
export class SeriesSearchOrderByPipe implements PipeTransform {

  names: string[] = ["search_rank", "series_id", "title", "units", "frequency", "seasonal_adjustment",
    "realtime_start", "realtime_end", "last_updated", "observation_start", "observation_end", "popularity", "group_popularity"];

  transform(value: number): string {
    return this.names[value]
  }

}
