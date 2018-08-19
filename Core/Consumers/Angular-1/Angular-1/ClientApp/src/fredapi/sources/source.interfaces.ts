export interface ISourceResponse {
  container: ISourceContainer;
  fetchMessage: string;
  url: string;
}

export interface ISourceContainer {
  realtime_start: Date;
  realtime_end: Date;
  order_by: number;
  sort_order: number;
  count: number;
  offset: number;
  limit: number;

  sources: ISource[];
}

export interface ISource {
  id: number;
  realtime_start: string;
  realtime_end: string;
  name: string;
  link: string;

}
//import { IApi, IExtendedFilters } from "../shared/shared.interfaces";

//export interface ISourceResponse {
//  filters: IExtendedFilters;
//  api: IApi;

//  sources: ISource[];
//}

//export interface ISource {
//  id: number;
//  realtime_start: string;
//  realtime_end: string;
//  name: string;
//  link: string;

//}


