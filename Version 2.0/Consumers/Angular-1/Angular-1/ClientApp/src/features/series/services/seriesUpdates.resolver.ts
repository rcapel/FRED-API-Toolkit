import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ISeriesUpdatesResponse } from '../../../fredapi/series/seriesUpdates.interfaces';

@Injectable()
export class SeriesUpdatesResolver implements Resolve<ISeriesUpdatesResponse>{

  constructor(
    private service: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesUpdatesResponse> {
    return this.service.getUpdates();
  }

}
