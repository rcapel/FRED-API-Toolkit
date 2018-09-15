import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { ISourceResponse } from '../../../fredapi/sources/source.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseSourcesComponent } from '../releaseSources/releaseSources.component';

@Injectable()
export class ReleaseSourcesResolver extends ResolverBase implements Resolve<ISourceResponse>{

  constructor(
    private service: ReleaseService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISourceResponse> {
    let releaseId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, ReleaseSourcesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getSources(+releaseId, queryString);
  }

}
