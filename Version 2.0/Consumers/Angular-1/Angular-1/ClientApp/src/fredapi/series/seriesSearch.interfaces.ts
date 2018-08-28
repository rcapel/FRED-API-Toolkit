import { IContainerExtensions, IFilters } from '../shared/shared.interfaces';
import { ISeries } from './series.interfaces';

export interface ISeriesSearchResponse extends IContainerExtensions {
  container: ISeriesSearchContainer;
}

export interface ISeriesSearchContainer extends IFilters {
  seriess: ISeries[];
}
