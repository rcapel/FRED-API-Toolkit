import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { IReleaseDatesResponse, IReleasesDate } from '../../../fredapi/releases/releaseDates.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleasesDatesComponent } from '../releasesDates/releasesDates.component';

@Injectable()
export class ReleasesDatesResolver extends ResolverBase implements Resolve<IReleaseDatesResponse<IReleasesDate>>{

  constructor(
    private service: ReleaseService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseDatesResponse<IReleasesDate>> {
    let queryString = this.buildQueryString(route, ReleasesDatesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getReleasesDates(queryString);
  }

}
