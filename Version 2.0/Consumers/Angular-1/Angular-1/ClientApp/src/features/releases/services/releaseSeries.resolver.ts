import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { ISeriesResponse } from '../../../fredapi/series/series.interfaces';

@Injectable()
export class ReleaseSeriesResolver implements Resolve<ISeriesResponse>{

  constructor(
    private service: ReleaseService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesResponse> {
    let releaseId: string = route.paramMap.get('id');
    let queryString: string = "";

    return this.service.getSeries(+releaseId, queryString);
  }

}
