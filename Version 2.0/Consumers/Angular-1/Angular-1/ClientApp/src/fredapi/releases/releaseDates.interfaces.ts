import { IContainerExtensions, IFilters } from "../shared/shared.interfaces";

export interface IReleaseDatesResponse<T> extends IContainerExtensions {
  container: IReleaseDatesContainer<T>;
}

export interface IReleaseDatesContainer<T> extends IFilters {
  release_dates: T[];
}

export interface IReleaseDate {
  release_id: number;
  date: Date;
}

export interface IReleasesDate extends IReleaseDate{
  release_name: string;
}

