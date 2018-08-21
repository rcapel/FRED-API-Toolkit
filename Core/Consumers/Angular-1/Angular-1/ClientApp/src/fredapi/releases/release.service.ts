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

  queryString: string;

  constructor(
    private client: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }

  public get(releaseId: number): Observable<IReleaseResponse> {
    let apiRoute = this.baseUrl + 'api/release/' + releaseId;
    console.log(apiRoute);

    return this.client.get<IReleaseResponse>(apiRoute);
  }

  public getDates(releaseId: number): Observable<IReleaseDatesResponse<IReleaseDate>> {
    let apiRoute = this.baseUrl + 'api/releaseDates/' + releaseId;
    console.log(apiRoute);

    return this.client.get<IReleaseDatesResponse<IReleaseDate>>(apiRoute);
  }

  public getReleases(): Observable<IReleaseResponse> {
    let apiRoute = this.baseUrl + 'api/releases';
    console.log(apiRoute);

    return this.client.get<IReleaseResponse>(apiRoute);
  }

  public getReleasesDates(): Observable<IReleaseDatesResponse<IReleasesDate>> {
    let apiRoute = this.baseUrl + 'api/releasesDates';
    console.log(apiRoute);

    return this.client.get<IReleaseDatesResponse<IReleasesDate>>(apiRoute);
  }

  public getSeries(releaseId: number): Observable<ISeriesResponse> {
    let apiRoute = this.baseUrl + 'api/releaseSeries/' + releaseId;
    console.log(apiRoute);

    return this.client.get<ISeriesResponse>(apiRoute);
  }

  public getSources(releaseId: number): Observable<ISourceResponse> {
    let apiRoute = this.baseUrl + 'api/releaseSources/' + releaseId;
    console.log(apiRoute);

    return this.client.get<ISourceResponse>(apiRoute);
  }

  public getTags(releaseId: number): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/releaseTags/' + releaseId;
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getRelatedTags(releaseId: number, tagNames: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/releaseRelatedTags/' + releaseId + "/" + tagNames;
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

}

