export interface IContainerExtensions {
  argumentValidationErrors: INameValuePair[];
  fetchMessage: string;
  url: string;
}

export interface INameValuePair {
  key: string;
  value: string;
}

export interface IFilters {
  realtime_start: Date;
  realtime_end: Date;
  order_by: number;
  sort_order: number;
  count: number;
  offset: number;
  limit: number;
}
