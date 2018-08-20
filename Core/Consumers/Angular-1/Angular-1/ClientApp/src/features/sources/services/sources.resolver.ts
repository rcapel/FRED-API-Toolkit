import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ResolveEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SourceService } from '../../../fredapi/sources/source.service';
import { ISourceResponse } from '../../../fredapi/sources/source.interfaces';

@Injectable()
export class SourcesResolver implements Resolve<ISourceResponse>{

  constructor(
    private service: SourceService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISourceResponse> {
    return this.service.get();
  }

}
