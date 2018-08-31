import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {

  observationsNames: string[] = ["observation_date"];
  releasesDatesNames: string[] = ["release_date", "release_id", "release_name"];
  releasesNames: string[] = ["release_id", "name", "press_release", "realtime_start", "realtime_end"];
  seriesNames: string[] = ["series_id", "title", "units", "frequency", "seasonal_adjustment",
    "realtime_start", "realtime_end", "last_updated", "observation_start", "observation_end", "popularity", "group_popularity"];
  seriesSearchNames: string[] = ["search_rank", "series_id", "title", "units", "frequency", "seasonal_adjustment",
    "realtime_start", "realtime_end", "last_updated", "observation_start", "observation_end", "popularity", "group_popularity"];
  sourcesNames: string[] = ["source_id", "name", "realtime_start", "realtime_end"];
  tagsNames: string[] = ["series_count", "popularity", "created", "name", "group_id"];
  vintageDatesNames: string[] = ["vintage_date"];

  transform(value: number, type: string): string {
    switch (type) {
      case "observations":
        return this.observationsNames[value];
      case "releasesDates":
        return this.releasesDatesNames[value];
      case "releases":
        return this.releasesNames[value];
      case "series":
        return this.seriesNames[value];
      case "seriesSearch":
        return this.seriesSearchNames[value];
      case "sources":
        return this.sourcesNames[value];
      case "tags":
        return this.tagsNames[value];
      case "vintageDates":
        return this.vintageDatesNames[value];
      default:
        return "Type Invalid";
    }
  }

}
