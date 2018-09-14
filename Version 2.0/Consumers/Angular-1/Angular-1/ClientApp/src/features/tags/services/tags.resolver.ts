import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TagService } from '../../../fredapi/tags/tag.service';
import { ITagResponse } from '../../../fredapi/tags/tag.interfaces';

@Injectable()
export class TagsResolver implements Resolve<ITagResponse>{

  constructor(
    private service: TagService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagResponse> {
    let queryString: string = "";

    return this.service.get(queryString);
  }

}
