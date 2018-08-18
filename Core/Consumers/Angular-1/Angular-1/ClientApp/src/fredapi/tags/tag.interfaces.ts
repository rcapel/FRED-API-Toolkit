export interface ITagResponse {
  container: ITagContainer;
  fetchMessage: string;
  url: string;
}

export interface ITagContainer {
  realtime_start: Date;
  realtime_end: Date;
  count: number;
  limit: number;
  offset: number;
  order_by: number;
  sort_order: number;

  Tags: ITag[];
}

export interface ITag {
  name: string;
  group_id: number;
  notes: string;
  created: Date;
  popularity: number;
  series_count: number;
}

