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

  public get(seriesId: string, queryString: string): Observable<ISingleSeriesResponse> {
    let apiRoute = this.baseUrl + 'api/series/' + seriesId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISingleSeriesResponse>(apiRoute);
  }

  public getCategories(seriesId: string, queryString: string): Observable<ICategoryResponse> {
    let apiRoute = this.baseUrl + 'api/seriesCategories/' + seriesId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ICategoryResponse>(apiRoute);
  }

  public getObservations(seriesId: string, queryString: string): Observable<ISeriesObservationsResponse> {
    let apiRoute = this.baseUrl + 'api/seriesObservations/' + seriesId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISeriesObservationsResponse>(apiRoute);
  }

  public getRelease(seriesId: string, queryString: string): Observable<IReleaseResponse> {
    let apiRoute = this.baseUrl + 'api/seriesRelease/' + seriesId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<IReleaseResponse>(apiRoute);
  }

  public getSearch(searchText: string, queryString: string): Observable<ISeriesSearchResponse> {
    let apiRoute = this.baseUrl + 'api/seriesSearch/' + searchText + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISeriesSearchResponse>(apiRoute);
  }

  public getSearchTags(searchText: string, queryString: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/seriesSearchTags/' + searchText + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getSearchRelatedTags(searchText: string, tagNames: string, queryString: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/seriesSearchRelatedTags/' + searchText + "/" + tagNames + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getTags(seriesId: string, queryString: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/seriesTags/' + seriesId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getUpdates(queryString: string): Observable<ISeriesUpdatesResponse> {
    let apiRoute = this.baseUrl + 'api/seriesUpdates' + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISeriesUpdatesResponse>(apiRoute);
  }

  public getVintageDates(seriesId: string, queryString: string): Observable<ISeriesVintageDatesResponse> {
    let apiRoute = this.baseUrl + 'api/seriesVintageDates/' + seriesId + (queryString || "");
    console.log(apiRoute);

    return this.client.get<ISeriesVintageDatesResponse>(apiRoute);
  }

}

