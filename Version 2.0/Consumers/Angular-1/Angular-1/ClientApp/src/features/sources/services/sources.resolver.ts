import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SourceService } from '../../../fredapi/sources/source.service';
import { ISourceResponse } from '../../../fredapi/sources/source.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SourcesComponent } from '../sources/sources.component';

@Injectable()
export class SourcesResolver extends ResolverBase implements Resolve<ISourceResponse>{

  constructor(
    private service: SourceService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISourceResponse> {
    let queryString = this.buildQueryString(route, SourcesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.get(queryString);
  }

}
