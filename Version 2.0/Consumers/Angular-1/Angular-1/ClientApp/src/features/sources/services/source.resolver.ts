import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SourceService } from '../../../fredapi/sources/source.service';
import { ISourceResponse } from '../../../fredapi/sources/source.interfaces';

@Injectable()
export class SourceResolver implements Resolve<ISourceResponse>{

  constructor(
    private service: SourceService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISourceResponse> {
    let sourceId: string = route.paramMap.get('id');

    return this.service.getSource(+sourceId);
  }

}
