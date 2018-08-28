import { IContainerExtensions, IFilters } from "../shared/shared.interfaces";

export interface ISeriesVintageDatesResponse extends IContainerExtensions {
  container: IVintageDateContainer;
}

export interface IVintageDateContainer extends IFilters {
  vintage_dates: Date[];
}
