import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesTagsComponent } from '../seriesTags/seriesTags.component';

@Injectable()
export class SeriesTagsResolver extends ResolverBase implements Resolve<ITagResponse>{

  constructor(
    private service: SeriesService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let seriesId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, SeriesTagsComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getTags(seriesId, queryString);
  }

}
