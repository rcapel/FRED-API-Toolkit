import { IFilters, IContainerExtensions } from "../shared/shared.interfaces";

export interface ITagResponse extends IContainerExtensions {
  container: ITagContainer;
}

export interface ITagContainer extends IFilters {
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

