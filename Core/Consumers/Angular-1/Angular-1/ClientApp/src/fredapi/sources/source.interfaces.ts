import { IContainerExtensions, IFilters } from "../shared/shared.interfaces";

export interface ISourceResponse extends IContainerExtensions {
  container: ISourceContainer;
}

export interface ISourceContainer extends IFilters {
  sources: ISource[];
}

export interface ISource {
  id: number;
  realtime_start: string;
  realtime_end: string;
  name: string;
  link: string;

}
