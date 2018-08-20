import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { ISourceResponse } from '../../../fredapi/sources/source.interfaces';

@Injectable()
export class ReleaseSourcesResolver implements Resolve<ISourceResponse>{

  constructor(
    private service: ReleaseService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISourceResponse> {
    let releaseId: string = route.paramMap.get('id');

    return this.service.getSources(releaseId);
  }

}
