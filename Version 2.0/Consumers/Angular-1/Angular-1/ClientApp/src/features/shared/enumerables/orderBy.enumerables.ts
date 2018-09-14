export class OrderByEnumerables {

  static observations: string[] = ["observation_date"];
  static releasesDates: string[] = ["release_date", "release_id", "release_name"];
  static releases: string[] = ["release_id", "name", "press_release", "realtime_start", "realtime_end"];
  static series: string[] = ["series_id", "title", "units", "frequency", "seasonal_adjustment",
    "realtime_start", "realtime_end", "last_updated", "observation_start", "observation_end", "popularity", "group_popularity"];
  static seriesSearch: string[] = ["search_rank", "series_id", "title", "units", "frequency", "seasonal_adjustment",
    "realtime_start", "realtime_end", "last_updated", "observation_start", "observation_end", "popularity", "group_popularity"];
  static sources: string[] = ["source_id", "name", "realtime_start", "realtime_end"];
  static tags: string[] = ["series_count", "popularity", "created", "name", "group_id"];
  static vintageDates: string[] = ["vintage_date"];

}
