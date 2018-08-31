import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISeriesResponse } from './series.interfaces'
import { ISingleSeriesResponse } from './singleSeries.interfaces'
import { ICategoryResponse } from '../categories/category.interfaces';
import { ISeriesObservationsResponse } from './seriesObservations.interfaces'
import { IReleaseResponse } from '../releases/release.interfaces';
import { ISeriesSearchResponse } from './seriesSearch.interfaces'
import { ITagResponse } from '../tags/tag.interfaces';
import { ISeriesUpdatesResponse } from './seriesUpdates.interfaces';
import { ISeriesVintageDatesResponse } from './seriesVintageDates.interfaces'

@Injectable()
export class SeriesService {

  queryString: string;

  constructor(
    private client: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }

  public get(seriesId: string): Observable<ISingleSeriesResponse> {
    let apiRoute = this.baseUrl + 'api/series/' + seriesId;
    console.log(apiRoute);

    return this.client.get<ISingleSeriesResponse>(apiRoute);
  }

  public getCategories(seriesId: string): Observable<ICategoryResponse> {
    let apiRoute = this.baseUrl + 'api/seriesCategories/' + seriesId;
    console.log(apiRoute);

    return this.client.get<ICategoryResponse>(apiRoute);
  }

  public getObservations(seriesId: string): Observable<ISeriesObservationsResponse> {
    let apiRoute = this.baseUrl + 'api/seriesObservations/' + seriesId;
    console.log(apiRoute);

    return this.client.get<ISeriesObservationsResponse>(apiRoute);
  }

  public getRelease(seriesId: string): Observable<IReleaseResponse> {
    let apiRoute = this.baseUrl + 'api/seriesRelease/' + seriesId;
    console.log(apiRoute);

    return this.client.get<IReleaseResponse>(apiRoute);
  }

  public getSearch(searchText: string): Observable<ISeriesSearchResponse> {
    let apiRoute = this.baseUrl + 'api/seriesSearch/' + searchText;
    console.log(apiRoute);

    return this.client.get<ISeriesSearchResponse>(apiRoute);
  }

  public getSearchTags(searchText: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/seriesSearchTags/' + searchText;
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getSearchRelatedTags(searchText: string, tagNames: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/seriesSearchRelatedTags/' + searchText + "/" + tagNames;
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  //public gett<T>(extension: string, params: any): Observable<T> {
  //  let apiRoute = this.baseUrl + 'api/' + extension;
  //  console.log(apiRoute);
  //  console.log(params);

  //  return this.client.get<T>((apiRoute, params);
  //}

  public getTags(seriesId: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/seriesTags/' + seriesId;
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getUpdates(): Observable<ISeriesUpdatesResponse> {
    let apiRoute = this.baseUrl + 'api/seriesUpdates';
    console.log(apiRoute);

    return this.client.get<ISeriesUpdatesResponse>(apiRoute);
  }

  public getVintageDates(seriesId: string): Observable<ISeriesVintageDatesResponse> {
    let apiRoute = this.baseUrl + 'api/seriesVintageDates/' + seriesId;
    console.log(apiRoute);

    return this.client.get<ISeriesVintageDatesResponse>(apiRoute);
  }

}

