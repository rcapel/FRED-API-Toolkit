import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SourceService } from '../../../fredapi/sources/source.service';
import { IReleaseResponse } from '../../../fredapi/releases/release.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SourceReleasesComponent } from '../sourceReleases/sourceReleases.component';

@Injectable()
export class SourceReleasesResolver extends ResolverBase implements Resolve<IReleaseResponse>{

  constructor(
    private service: SourceService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseResponse> {
    let sourceId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, SourceReleasesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getSourceReleases(+sourceId, queryString);
  }

}
