import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICategoryResponse } from './category.interfaces'
import { ISeriesResponse } from '../series/series.interfaces';
import { ITagResponse } from '../tags/tag.interfaces';

@Injectable()
export class CategoryService {

  queryString: string;

  constructor(
    private client: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }

  public get(categoryId: number): Observable<ICategoryResponse> {
    let apiRoute = this.baseUrl + 'api/category/' + categoryId;

    return this.client.get<ICategoryResponse>(apiRoute);
  }

  public getChildren(categoryId: number, queryParams: string): Observable<ICategoryResponse> {
    let apiRoute = this.baseUrl + 'api/categoryChildren/' + categoryId + (queryParams || "");
    console.log(apiRoute);

    return this.client.get<ICategoryResponse>(apiRoute);
  }

  public getRelated(categoryId: number, queryParams: string): Observable<ICategoryResponse> {
    let apiRoute = this.baseUrl + 'api/categoryRelated/' + categoryId + (queryParams || "");
    console.log(apiRoute);

    return this.client.get<ICategoryResponse>(apiRoute);
  }

  public getSeries(categoryId: number, queryParams: string): Observable<ISeriesResponse> {
    let apiRoute = this.baseUrl + 'api/categorySeries/' + categoryId + (queryParams || "");
    console.log(apiRoute);

    return this.client.get<ISeriesResponse>(apiRoute);
  }

  public getTags(categoryId: number, queryParams: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/categoryTags/' + categoryId + (queryParams || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getRelatedTags(categoryId: number): Observable<ICategoryResponse> {
    return this.client.get<ICategoryResponse>(this.baseUrl + 'api/categoryRelatedTags/' + categoryId);
  }

}

