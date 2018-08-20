import { IContainerExtensions, IFilters } from '../shared/shared.interfaces';
import { ISeriesItem } from './series.interfaces';

export interface ISingleSeriesResponse extends IContainerExtensions {
  container: ISingleSeriesContainer;
}

export interface ISingleSeriesContainer extends IFilters {
  seriess: ISeriesItem[];
}
