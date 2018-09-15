import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ISeriesResponse } from '../../../fredapi/series/series.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesSearchComponent } from '../seriesSearch/seriesSearch.component';

@Injectable()
export class SeriesSearchResolver extends ResolverBase implements Resolve<ISeriesResponse>{

  constructor(
    private service: SeriesService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesResponse> {
    let searchText: string = route.paramMap.get('search_text');
    let queryString = this.buildQueryString(route, SeriesSearchComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getSearch(searchText, queryString);
  }

}
