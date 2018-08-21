import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TagService } from '../../../fredapi/tags/tag.service';
import { ISeriesResponse } from '../../../fredapi/series/series.interfaces';

@Injectable()
export class TagsSeriesResolver implements Resolve<ISeriesResponse>{

  constructor(
    private service: TagService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesResponse> {
    let tagNames: string = route.paramMap.get("tag_names");
    let queryString: string = "";

    return this.service.getTagsSeries(tagNames, queryString);
  }

}
