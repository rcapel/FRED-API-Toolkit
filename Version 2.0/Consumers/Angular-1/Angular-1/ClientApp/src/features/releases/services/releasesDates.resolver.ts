import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { IReleaseDatesResponse, IReleasesDate } from '../../../fredapi/releases/releaseDates.interfaces';

@Injectable()
export class ReleasesDatesResolver implements Resolve<IReleaseDatesResponse<IReleasesDate>>{

  constructor(
    private service: ReleaseService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseDatesResponse<IReleasesDate>> {
    return this.service.getReleasesDates();
  }

}
