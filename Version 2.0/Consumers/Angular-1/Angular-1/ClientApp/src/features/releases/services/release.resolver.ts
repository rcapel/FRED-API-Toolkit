import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { IReleaseResponse } from '../../../fredapi/releases/release.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseComponent } from '../release/release.component';

@Injectable()
export class ReleaseResolver extends ResolverBase implements Resolve<IReleaseResponse>{

  constructor(
    private service: ReleaseService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseResponse> {
    let releaseId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, ReleaseComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.get(+releaseId, queryString);
  }

}
