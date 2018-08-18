import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISingleSeriesResponse, ISeriesResponse, ISeriesObservationsResponse } from './series.interfaces'
import { ICategoryResponse } from '../categories/category.interfaces';
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

}

