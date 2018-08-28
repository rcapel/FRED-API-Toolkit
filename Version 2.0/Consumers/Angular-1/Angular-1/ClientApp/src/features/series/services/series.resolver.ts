import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ISingleSeriesResponse } from '../../../fredapi/series/singleSeries.interfaces';

@Injectable()
export class SeriesResolver implements Resolve<ISingleSeriesResponse>{

  constructor(
    private service: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISingleSeriesResponse> {
    let seriesId: string = route.paramMap.get('id');

    return this.service.get(seriesId);
  }

}
