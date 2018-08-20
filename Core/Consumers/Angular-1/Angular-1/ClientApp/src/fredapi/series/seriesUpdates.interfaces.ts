import { IContainerExtensions } from '../shared/shared.interfaces';
import { ISeriesItem } from './series.interfaces';

export interface ISeriesUpdateResponse extends IContainerExtensions {
  container: ISeriesUpdateContainer;
}

export interface ISeriesUpdateContainer {
  filter_variable: string;
  filter_value: string;

  seriess: ISeriesItem[];
}
