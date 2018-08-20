export interface IReleaseDatesResponse<T> {
  container: IReleaseDatesContainer<T>;
  fetchMessage: string;
  url: string;
}

export interface IReleaseDatesContainer<T> {
  realtime_start: Date;
  realtime_end: Date;
  count: number;
  limit: number;
  offset: number;
  order_by: number;
  sort_order: number;

  release_dates: T[];
}

export interface IReleaseDate {
  release_id: number;
  date: Date;
}

export interface IReleasesDate extends IReleaseDate{
  release_name: string;
}

