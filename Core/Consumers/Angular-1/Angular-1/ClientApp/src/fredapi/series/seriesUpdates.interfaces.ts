import { IContainerExtensions } from '../shared/shared.interfaces';
import { ISeries } from './series.interfaces';

export interface ISeriesUpdatesResponse extends IContainerExtensions {
  container: ISeriesUpdatesContainer;
}

export interface ISeriesUpdatesContainer {
  filter_variable: string;
  filter_value: string;

  seriess: ISeries[];
}
