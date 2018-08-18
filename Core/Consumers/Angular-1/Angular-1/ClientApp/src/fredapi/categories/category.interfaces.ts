export interface ICategoryResponse {
  categories: ICategory[];
  fetchMessage: string;
  url: string;
}

export interface ICategory {
  id: number;
  name: string;
  parent_id: number;
}

