import { ISeriesItem } from './series.interfaces';

export interface ISeriesUpdateResponse {
  container: ISeriesUpdateContainer;
  fetchMessage: string;
  url: string;
}

export interface ISeriesUpdateContainer {
  filter_variable: string;
  filter_value: string;

  seriess: ISeriesItem[];
}
