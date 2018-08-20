import { IContainerExtensions, IFilters } from "../shared/shared.interfaces";

export interface ISeriesObservationsResponse extends IContainerExtensions {
  container: ISeriesObservationsContainer;
}

export interface ISeriesObservationsContainer extends IFilters {
  units: number;
  output_type: number;
  file_type: string;

  observations: IObservation[];
}

export interface IObservation {
  realtime_start: Date;
  realtime_end: Date;
  date: Date;
  value: string;
}
