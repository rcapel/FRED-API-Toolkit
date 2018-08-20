import { IContainerExtensions, IFilters } from "../shared/shared.interfaces";

export interface ISeriesResponse extends IContainerExtensions {
  container: ISeriesContainer;
}

export interface ISeriesContainer extends IFilters {
  seriess: ISeriesItem[];
}

export interface ISeriesItem {
  id: number;
  realtime_start: Date,
  realtime_end: Date,
  title: string;
  //parent_id: number;//todo:add to fred
  observation_start: Date;
  observation_end: Date;
  frequency: string;
  frequency_short: string;
  units: string;
  units_short: string;
  seasonal_adjustment: string;
  seasonal_adjustment_short: string;
  last_updated: Date;
  popularity: number;
  notes: string;
}
