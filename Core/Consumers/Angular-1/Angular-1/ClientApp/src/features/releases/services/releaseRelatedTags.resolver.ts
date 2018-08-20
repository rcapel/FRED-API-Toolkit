import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';

@Injectable()
export class ReleaseRelatedTagsResolver implements Resolve<ITagResponse>{

  constructor(
    private service: ReleaseService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let releaseId: string = route.paramMap.get('id');
    let tagNames: string = route.paramMap.get("tag_names");

    return this.service.getRelatedTags(releaseId, tagNames);
  }

}
