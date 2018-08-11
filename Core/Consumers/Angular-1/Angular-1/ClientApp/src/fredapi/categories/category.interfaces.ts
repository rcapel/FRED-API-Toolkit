export interface ICategoryResponse {
  container: ICategoryContainer;
  fetchMessage: string;
  url: string;
}

export interface ICategoryContainer {
  categories: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
  parent_id: number;
}

