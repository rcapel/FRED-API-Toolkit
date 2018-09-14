import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISourceResponse } from './source.interfaces'
import { IReleaseResponse } from '../releases/release.interfaces';

@Injectable()
export class SourceService {

  constructor(private client: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public get(queryString: string): Observable<ISourceResponse> {
    let apiRoute = this.baseUrl + 'api/sources/' + (queryString || "");

    return this.client.get<ISourceResponse>(apiRoute);
  }

  public getSource(sourceId: number, queryString: string): Observable<ISourceResponse> {
    let apiRoute = this.baseUrl + 'api/source/' + sourceId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISourceResponse>(apiRoute);
  }

  public getSourceReleases(sourceId: number, queryString: string): Observable<IReleaseResponse> {
    let apiRoute = this.baseUrl + 'api/sourceReleases/' + sourceId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<IReleaseResponse>(apiRoute);
  }

}

