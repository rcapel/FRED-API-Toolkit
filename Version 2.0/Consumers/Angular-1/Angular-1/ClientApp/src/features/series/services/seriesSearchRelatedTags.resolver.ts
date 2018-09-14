import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';

@Injectable()
export class SeriesSearchRelatedTagsResolver implements Resolve<ITagResponse>{

  constructor(
    private service: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let searchText: string = route.paramMap.get('series_search_text');
    let tagNames: string = route.paramMap.get('tag_names');
    let queryString: string = "";

    return this.service.getSearchRelatedTags(searchText, tagNames, queryString);
    //return this.service.gett("", { searchText, tagNames });
  }

}
