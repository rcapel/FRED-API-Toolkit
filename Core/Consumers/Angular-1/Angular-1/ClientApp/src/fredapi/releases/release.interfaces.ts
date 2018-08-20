import { ISource } from "../sources/source.interfaces";

export interface IReleaseResponse {
  container: IReleaseContainer;
  fetchMessage: string;
  url: string;
}

export interface IReleaseContainer {//todo:extend filters interface
  realtime_start: Date;
  realtime_end: Date;
  count: number;
  limit: number;
  offset: number;
  order_by: number;
  sort_order: number;

  releases: IRelease[];
}

export interface IRelease extends ISource {
  //sourceItem: ISource;
  press_release: boolean;
}

