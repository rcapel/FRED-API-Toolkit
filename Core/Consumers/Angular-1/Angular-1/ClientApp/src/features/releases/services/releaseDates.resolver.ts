import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { IReleaseDatesResponse } from '../../../fredapi/releases/releaseDates.interfaces';

@Injectable()
export class ReleaseDatesResolver implements Resolve<IReleaseDatesResponse>{

  constructor(
    private service: ReleaseService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseDatesResponse> {
    let releaseId: string = route.paramMap.get('id');

    return this.service.getDates(releaseId);
  }

}
