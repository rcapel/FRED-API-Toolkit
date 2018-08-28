import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISourceResponse } from './source.interfaces'
import { IReleaseResponse } from '../releases/release.interfaces';

@Injectable()
export class SourceService {

  constructor(private client: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public get(): Observable<ISourceResponse> {
    return this.client.get<ISourceResponse>(this.baseUrl + 'api/sources');
  }

  public getSource(sourceId: number): Observable<ISourceResponse> {
    let apiRoute = this.baseUrl + 'api/source/' + sourceId;
    console.log(apiRoute);

    return this.client.get<ISourceResponse>(apiRoute);
  }

  public getSourceReleases(sourceId: number): Observable<IReleaseResponse> {
    let apiRoute = this.baseUrl + 'api/sourceReleases/' + sourceId;
    console.log(apiRoute);

    return this.client.get<IReleaseResponse>(apiRoute);
  }

}

