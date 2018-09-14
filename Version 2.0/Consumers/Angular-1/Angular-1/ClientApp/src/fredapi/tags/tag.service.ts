import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITagResponse } from './tag.interfaces'
import { ISeriesResponse } from '../series/series.interfaces';

@Injectable()
export class TagService {

  constructor(private client: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public get(queryString: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/tags' + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getRelatedTags(tagNames: string, queryString: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/relatedTags/' + tagNames + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getTagsSeries(tagNames: string, queryString: string): Observable<ISeriesResponse> {
    let apiRoute = this.baseUrl + 'api/tagsSeries/' + tagNames + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISeriesResponse>(apiRoute);
  }

}

