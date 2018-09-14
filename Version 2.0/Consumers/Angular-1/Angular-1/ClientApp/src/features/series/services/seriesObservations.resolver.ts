import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ISeriesObservationsResponse } from '../../../fredapi/series/seriesObservations.interfaces';

@Injectable()
export class SeriesObservationsResolver implements Resolve<ISeriesObservationsResponse>{

  constructor(
    private service: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesObservationsResponse> {
    let seriesId: string = route.paramMap.get('id');
    let queryString: string = "";

    return this.service.getObservations(seriesId, queryString);
  }

}
