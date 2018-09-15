import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { IReleaseResponse } from '../../../fredapi/releases/release.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesReleaseComponent } from '../seriesRelease/seriesRelease.component';

@Injectable()
export class SeriesReleaseResolver extends ResolverBase implements Resolve<IReleaseResponse>{

  constructor(
    private service: SeriesService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReleaseResponse> {
    let seriesId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, SeriesReleaseComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getRelease(seriesId, queryString);
  }

}
