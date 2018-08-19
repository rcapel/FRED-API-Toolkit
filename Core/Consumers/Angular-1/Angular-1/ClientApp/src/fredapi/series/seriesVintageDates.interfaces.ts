export interface ISeriesVintageDatesResponse {
  container: IVintageDateContainer;
  fetchMessage: string;
  url: string;
}

export interface IVintageDateContainer {
  count: number;
  limit: number;
  offset: number;
  order_by: number;
  sort_order: number;

  vintage_dates: Date[];
}
