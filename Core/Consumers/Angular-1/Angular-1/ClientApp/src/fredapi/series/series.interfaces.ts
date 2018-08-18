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
  parent_id: number;
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

///////////////////////////////////////////////////////

export interface ISingleSeriesResponse {
  container: ISingleSeriesContainer;
  fetchMessage: string;
  url: string;
}

export interface ISingleSeriesContainer {
  realtime_start: Date;
  realtime_end: Date;

  seriess: ISeriesItem[];
}

///////////////////////////////////////////////////////

export interface ISeriesObservationsResponse {
  container: ISeriesObservationsContainer;
  fetchMessage: string;
  url: string;
}

export interface ISeriesObservationsContainer {
  realtime_start: Date;
  realtime_end: Date;
  units: number;
  output_type: number;
  file_type: string;

  observations: IObservation[];
}

export interface IObservation {
  realtime_start: Date;
  realtime_end: Date;
  date: Date;
  value: string;
}

///////////////////////////////////////////////////////


