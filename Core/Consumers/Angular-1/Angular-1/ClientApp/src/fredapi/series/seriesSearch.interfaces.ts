import { IContainerExtensions, IFilters } from '../shared/shared.interfaces';
import { ISeriesItem } from './series.interfaces';

export interface ISeriesSearchResponse extends IContainerExtensions {
  container: ISeriesSearchContainer;
}

export interface ISeriesSearchContainer extends IFilters {
  seriess: ISeriesItem[];
}
