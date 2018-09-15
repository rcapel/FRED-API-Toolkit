import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TagService } from '../../../fredapi/tags/tag.service';
import { ISeriesResponse } from '../../../fredapi/series/series.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { TagsSeriesComponent } from '../tagsSeries/tagsSeries.component';

@Injectable()
export class TagsSeriesResolver extends ResolverBase implements Resolve<ISeriesResponse>{

  constructor(
    private service: TagService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesResponse> {
    let tagNames: string = route.paramMap.get("tag_names");
    let queryString = this.buildQueryString(route, TagsSeriesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getTagsSeries(tagNames, queryString);
  }

}
