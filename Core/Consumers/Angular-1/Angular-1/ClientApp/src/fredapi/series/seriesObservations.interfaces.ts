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
