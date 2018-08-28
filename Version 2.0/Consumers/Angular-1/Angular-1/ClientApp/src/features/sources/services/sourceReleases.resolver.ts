import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SourceService } from '../../../fredapi/sources/source.service';
import { IReleaseResponse } from '../../../fredapi/releases/release.interfaces';

@Injectable()
export class SourceReleasesResolver implements Resolve<IReleaseResponse>{

  constructor(
    private service: SourceService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseResponse> {
    let sourceId: string = route.paramMap.get('id');

    return this.service.getSourceReleases(+sourceId);
  }

}
