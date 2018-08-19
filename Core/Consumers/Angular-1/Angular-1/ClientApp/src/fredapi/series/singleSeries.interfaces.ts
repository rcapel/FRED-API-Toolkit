import { ISeriesItem } from './series.interfaces';

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
