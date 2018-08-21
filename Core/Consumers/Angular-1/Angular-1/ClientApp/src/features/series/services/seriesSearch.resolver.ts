import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ISeriesResponse } from '../../../fredapi/series/series.interfaces';

@Injectable()
export class SeriesSearchResolver implements Resolve<ISeriesResponse>{

  constructor(
    private service: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesResponse> {
    let searchText: string = route.paramMap.get('search_text');

    return this.service.getSearch(searchText);
  }

}
