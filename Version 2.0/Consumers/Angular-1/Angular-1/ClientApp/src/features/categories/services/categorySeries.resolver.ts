import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoryService } from '../../../fredapi/categories/category.service';
import { ISeriesResponse } from '../../../fredapi/series/series.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { CategorySeriesComponent } from '../categorySeries/categorySeries.component';

@Injectable()
export class CategorySeriesResolver extends ResolverBase implements Resolve<ISeriesResponse>{

  constructor(
    private service: CategoryService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesResponse> {
    let categoryId: string = route.paramMap.get("id");
    let queryString = this.buildQueryString(route, CategorySeriesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getSeries(+categoryId, queryString);
  }

}
