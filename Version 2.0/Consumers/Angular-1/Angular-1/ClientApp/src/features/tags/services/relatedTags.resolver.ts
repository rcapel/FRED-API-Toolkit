import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TagService } from '../../../fredapi/tags/tag.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { RelatedTagsComponent } from '../relatedTags/relatedTags.component';

@Injectable()
export class RelatedTagsResolver extends ResolverBase implements Resolve<ITagResponse>{

  constructor(
    private service: TagService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let tagNames: string = route.paramMap.get("tag_names");
    let queryString = this.buildQueryString(route, RelatedTagsComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getRelatedTags(tagNames, queryString);
  }

}
