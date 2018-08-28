import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoryService } from '../../../fredapi/categories/category.service';
import { ICategoryResponse } from '../../../fredapi/categories/category.interfaces';

@Injectable()
export class CategoryChildrenResolver implements Resolve<ICategoryResponse>{

  constructor(
    private service: CategoryService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategoryResponse> {
    let categoryId: string = route.paramMap.get("id");
    let queryString: string = "?";
    let map: ParamMap = route.queryParamMap;
    queryString += this.addQueryParam("realtime_start", map);
    queryString += this.addQueryParam("realtime_end", map);
    queryString = queryString.substring(0, queryString.length - 1);

    //alert('from resolver:categoryChildren: ' + queryString);
    console.log(queryString);

    return this.service.getChildren(+categoryId, queryString);
  }

  private addQueryParam(name: string, map: ParamMap): string {
    return map.has(name) ? name + "=" + map.get(name) + "&" : "";
  }

}
