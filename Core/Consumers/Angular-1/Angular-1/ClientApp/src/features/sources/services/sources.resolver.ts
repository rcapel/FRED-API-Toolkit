import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ResolveEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SourcesService } from '../../../fredapi/sources/sources.service';
import { ISourceResponse } from '../../../fredapi/sources/sources.interfaces';

@Injectable()
export class SourcesResolver implements Resolve<ISourceResponse>{

  constructor(
    private service: SourcesService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISourceResponse> {
    return this.service.get();
  }

}
