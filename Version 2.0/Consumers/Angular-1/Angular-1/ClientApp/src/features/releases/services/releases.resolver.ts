import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { IReleaseResponse } from '../../../fredapi/releases/release.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleasesComponent } from '../releases/releases.component';

@Injectable()
export class ReleasesResolver extends ResolverBase implements Resolve<IReleaseResponse>{

  constructor(
    private service: ReleaseService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseResponse> {
    let queryString = this.buildQueryString(route, ReleasesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getReleases(queryString);
  }

}
