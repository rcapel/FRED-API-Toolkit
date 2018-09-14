import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IReleaseResponse } from './release.interfaces';
import { IReleaseDatesResponse, IReleaseDate, IReleasesDate } from './releaseDates.interfaces';
import { ISeriesResponse } from '../series/series.interfaces';
import { ISourceResponse } from '../sources/source.interfaces';
import { ITagResponse } from '../tags/tag.interfaces';

@Injectable()
export class ReleaseService {

  constructor(
    private client: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }

  public get(releaseId: number, queryString: string): Observable<IReleaseResponse> {
    let apiRoute = this.baseUrl + 'api/release/' + releaseId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<IReleaseResponse>(apiRoute);
  }

  public getDates(releaseId: number, queryString: string): Observable<IReleaseDatesResponse<IReleaseDate>> {
    let apiRoute = this.baseUrl + 'api/releaseDates/' + releaseId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<IReleaseDatesResponse<IReleaseDate>>(apiRoute);
  }

  public getReleases(queryString: string): Observable<IReleaseResponse> {
    let apiRoute = this.baseUrl + 'api/releases' + (queryString || "");
    console.log(apiRoute);

    return this.client.get<IReleaseResponse>(apiRoute);
  }

  public getReleasesDates(queryString: string): Observable<IReleaseDatesResponse<IReleasesDate>> {
    let apiRoute = this.baseUrl + 'api/releasesDates' + (queryString || "");
    console.log(apiRoute);

    return this.client.get<IReleaseDatesResponse<IReleasesDate>>(apiRoute);
  }

  public getSeries(releaseId: number, queryString: string): Observable<ISeriesResponse> {
    let apiRoute = this.baseUrl + 'api/releaseSeries/' + releaseId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISeriesResponse>(apiRoute);
  }

  public getSources(releaseId: number, queryString: string): Observable<ISourceResponse> {
    let apiRoute = this.baseUrl + 'api/releaseSources/' + releaseId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISourceResponse>(apiRoute);
  }

  public getTags(releaseId: number, queryString: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/releaseTags/' + releaseId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getRelatedTags(releaseId: number, tagNames: string, queryString: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/releaseRelatedTags/' + releaseId + "/" + tagNames + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

}

