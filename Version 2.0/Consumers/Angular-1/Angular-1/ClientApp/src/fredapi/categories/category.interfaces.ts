import { IContainerExtensions } from "../shared/shared.interfaces";

export interface ICategoryResponse extends IContainerExtensions {
  categories: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
  parent_id: number;
}

