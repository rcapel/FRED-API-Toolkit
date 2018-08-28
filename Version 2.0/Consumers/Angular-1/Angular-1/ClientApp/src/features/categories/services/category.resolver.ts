import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoryService } from '../../../fredapi/categories/category.service';
import { ICategoryResponse } from '../../../fredapi/categories/category.interfaces';

@Injectable()
export class CategoryResolver implements Resolve<ICategoryResponse>{

  constructor(
    private service: CategoryService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategoryResponse> {
    let categoryId: string = route.paramMap.get('id');
    //alert('from resolver: category ' + categoryId);

    //if (isNaN(categoryId)) {
    //  console.log("${categoryId} is not a number.");
    //  this.router.navigate(["/"]);
    //  return Observable.of(null);
    //}
    return this.service.get(+categoryId);
  }

}
