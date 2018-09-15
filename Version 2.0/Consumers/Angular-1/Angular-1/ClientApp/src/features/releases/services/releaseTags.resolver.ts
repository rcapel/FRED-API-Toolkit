import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseTagsComponent } from '../releaseTags/releaseTags.component';

@Injectable()
export class ReleaseTagsResolver extends ResolverBase implements Resolve<ITagResponse>{

  constructor(
    private service: ReleaseService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let releaseId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, ReleaseTagsComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getTags(+releaseId, queryString);
  }

}
