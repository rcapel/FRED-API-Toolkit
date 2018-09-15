import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { ISeriesResponse } from '../../../fredapi/series/series.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseSeriesComponent } from '../releaseSeries/releaseSeries.component';

@Injectable()
export class ReleaseSeriesResolver extends ResolverBase implements Resolve<ISeriesResponse>{

  constructor(
    private service: ReleaseService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesResponse> {
    let releaseId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, ReleaseSeriesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getSeries(+releaseId, queryString);
  }

}
