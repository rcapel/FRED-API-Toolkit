import { ISource } from "../sources/source.interfaces";
import { IContainerExtensions, IFilters } from "../shared/shared.interfaces";

export interface IReleaseResponse extends IContainerExtensions {
  container: IReleaseContainer;
}

export interface IReleaseContainer extends IFilters {
  releases: IRelease[];
}

export interface IRelease extends ISource {
  press_release: boolean;
}

