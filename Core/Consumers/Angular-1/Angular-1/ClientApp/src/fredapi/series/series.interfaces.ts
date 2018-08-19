export interface ISeriesResponse {
  container: ISeriesContainer;
  fetchMessage: string;
  url: string;
}

export interface ISeriesContainer {
  realtime_start: Date;
  realtime_end: Date;
  count: number;
  limit: number;
  offset: number;
  order_by: number;
  sort_order: number;

  seriess: ISeriesItem[];
}

export interface ISeriesItem {
  id: number;
  realtime_start: Date,
  realtime_end: Date,
  title: string;
  //parent_id: number;//add to fred
  observation_start: Date;
  observation_end: Date;
  frequency: string;
  frequency_short: string;
  units: string;
  units_short: string;
  seasonal_adjustment: string;
  seasonal_adjustment_short: string;
  last_updated: Date;
  popularity: number;
  notes: string;
}
