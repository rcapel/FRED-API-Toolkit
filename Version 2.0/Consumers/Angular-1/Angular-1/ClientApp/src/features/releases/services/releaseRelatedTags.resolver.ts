import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ReleaseService } from '../../../fredapi/releases/release.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseRelatedTagsComponent } from '../releaseRelatedTags/releaseRelatedTags.component';

@Injectable()
export class ReleaseRelatedTagsResolver extends ResolverBase implements Resolve<ITagResponse>{

  constructor(
    private service: ReleaseService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let releaseId: string = route.paramMap.get('id');
    let tagNames: string = route.paramMap.get("tag_names");
    let queryString = this.buildQueryString(route, ReleaseRelatedTagsComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getRelatedTags(+releaseId, tagNames, queryString);
  }

}
