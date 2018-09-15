import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoryService } from '../../../fredapi/categories/category.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { CategoryTagsComponent } from '../categoryTags/categoryTags.component';

@Injectable()
export class CategoryTagsResolver extends ResolverBase implements Resolve<ITagResponse>{

  constructor(
    private service: CategoryService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let categoryId: string = route.paramMap.get("id");
    let queryString = this.buildQueryString(route, CategoryTagsComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getTags(+categoryId, queryString);
  }

}
