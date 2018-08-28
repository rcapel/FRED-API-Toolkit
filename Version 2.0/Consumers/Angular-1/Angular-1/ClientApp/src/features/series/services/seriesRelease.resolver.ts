import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { IReleaseResponse } from '../../../fredapi/releases/release.interfaces';

@Injectable()
export class SeriesReleaseResolver implements Resolve<IReleaseResponse>{

  constructor(
    private service: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseResponse> {
    let seriesId: string = route.paramMap.get('id');

    return this.service.getRelease(seriesId);
  }

}
