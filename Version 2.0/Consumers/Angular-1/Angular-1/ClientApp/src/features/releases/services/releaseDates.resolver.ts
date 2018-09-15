import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { IReleaseDatesResponse, IReleaseDate } from '../../../fredapi/releases/releaseDates.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseDatesComponent } from '../releaseDates/releaseDates.component';

@Injectable()
export class ReleaseDatesResolver extends ResolverBase implements Resolve<IReleaseDatesResponse<IReleaseDate>>{

  constructor(
    private service: ReleaseService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseDatesResponse<IReleaseDate>> {
    let releaseId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, ReleaseDatesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getDates(+releaseId, queryString);
  }

}
