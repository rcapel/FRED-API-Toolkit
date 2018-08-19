import { ISeriesItem } from './series.interfaces';

export interface ISeriesSearchResponse {
  container: ISeriesSearchContainer;
  fetchMessage: string;
  url: string;
}

export interface ISeriesSearchContainer {
  count: number;
  limit: number;
  offset: number;
  order_by: number;
  sort_order: number;

  seriess: ISeriesItem[];
}
