import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ISeriesVintageDatesResponse } from '../../../fredapi/series/seriesVintageDates.interfaces';

@Injectable()
export class SeriesVintageDatesResolver implements Resolve<ISeriesVintageDatesResponse>{

  constructor(
    private service: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesVintageDatesResponse> {
    let seriesId: string = route.paramMap.get('id');

    return this.service.getVintageDates(seriesId);
  }

}
