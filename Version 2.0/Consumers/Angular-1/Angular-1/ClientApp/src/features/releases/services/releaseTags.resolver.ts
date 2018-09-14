import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';

@Injectable()
export class ReleaseTagsResolver implements Resolve<ITagResponse>{

  constructor(
    private service: ReleaseService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let releaseId: string = route.paramMap.get('id');
    let queryString: string = "";

    return this.service.getTags(+releaseId, queryString);
  }

}
