import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';

@Injectable()
export class SeriesTagsResolver implements Resolve<ITagResponse>{

  constructor(
    private service: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let seriesId: string = route.paramMap.get('id');

    return this.service.getTags(seriesId);
  }

}
