import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICategoryResponse } from './category.interfaces'
import { ISeriesResponse } from '../series/series.interfaces';
import { ITagResponse } from '../tags/tag.interfaces';

@Injectable()
export class CategoryService {

  constructor(
    private client: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }

  public get(categoryId: number): Observable<ICategoryResponse> {
    let apiRoute = this.baseUrl + 'api/category/' + categoryId;
    console.log(apiRoute);

    return this.client.get<ICategoryResponse>(apiRoute);
  }

  public getChildren(categoryId: number, queryString: string): Observable<ICategoryResponse> {
    let apiRoute = this.baseUrl + 'api/categoryChildren/' + categoryId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ICategoryResponse>(apiRoute);
  }

  public getRelated(categoryId: number, queryString: string): Observable<ICategoryResponse> {
    let apiRoute = this.baseUrl + 'api/categoryRelated/' + categoryId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ICategoryResponse>(apiRoute);
  }

  public getSeries(categoryId: number, queryString: string): Observable<ISeriesResponse> {
    let apiRoute = this.baseUrl + 'api/categorySeries/' + categoryId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISeriesResponse>(apiRoute);
  }

  public getTags(categoryId: number, queryString: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/categoryTags/' + categoryId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getRelatedTags(categoryId: number, tagNames: string, queryString: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/categoryRelatedTags/' + categoryId + "/" + tagNames + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

}

