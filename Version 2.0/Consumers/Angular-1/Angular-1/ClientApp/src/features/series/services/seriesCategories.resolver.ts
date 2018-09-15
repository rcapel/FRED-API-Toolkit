import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ICategoryResponse } from '../../../fredapi/categories/category.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesCategoriesComponent } from '../seriesCategories/seriesCategories.component';

@Injectable()
export class SeriesCategoriesResolver extends ResolverBase implements Resolve<ICategoryResponse>{

  constructor(
    private service: SeriesService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategoryResponse> {
    let seriesId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, SeriesCategoriesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getCategories(seriesId, queryString);
  }

}
