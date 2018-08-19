import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISeriesResponse } from './series.interfaces'
import { ISingleSeriesResponse } from './singleSeries.interfaces'
import { ISeriesObservationsResponse } from './seriesObservations.interfaces'
import { ISeriesSearchResponse } from './seriesSearch.interfaces'
import { ISeriesVintageDatesResponse } from './seriesVintageDates.interfaces'
import { ICategoryResponse } from '../categories/category.interfaces';
import { ITagResponse } from '../tags/tag.interfaces';
//import { ITagResponse } from '../tags/tag.interfaces';

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

  //public getReleases(seriesId: string): Observable<IReleasesResponse> {
  //  let apiRoute = this.baseUrl + 'api/seriesObservations/' + seriesId;
  //  console.log(apiRoute);

  //  return this.client.get<ISeriesObservationsResponse>(apiRoute);
  //}

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

  public getSearchRelatedTags(searchText: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/seriesSearchRelatedTags/' + searchText;
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getTags(seriesId: string): Observable<ITagResponse> {
    let apiRoute = this.baseUrl + 'api/seriesTags/' + seriesId;
    console.log(apiRoute);

    return this.client.get<ITagResponse>(apiRoute);
  }

  public getVintageDates(seriesId: string): Observable<ISeriesVintageDatesResponse> {
    let apiRoute = this.baseUrl + 'api/seriesVintageDates/' + seriesId;
    console.log(apiRoute);

    return this.client.get<ISeriesVintageDatesResponse>(apiRoute);
  }

}

