import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { IReleaseResponse } from '../../../fredapi/releases/release.interfaces';

@Injectable()
export class ReleasesResolver implements Resolve<IReleaseResponse>{

  constructor(
    private service: ReleaseService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseResponse> {
    return this.service.getReleases();
  }

}
