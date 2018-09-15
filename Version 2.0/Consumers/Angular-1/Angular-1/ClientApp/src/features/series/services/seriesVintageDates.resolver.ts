import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../../../fredapi/series/series.service';
import { ISeriesVintageDatesResponse } from '../../../fredapi/series/seriesVintageDates.interfaces';
import { ResolverBase } from '../../baseClasses/resolverBase/resolver.base';
import { RouteToFormBindingService } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesVintageDatesComponent } from '../seriesVintageDates/seriesVintageDates.component';

@Injectable()
export class SeriesVintageDatesResolver extends ResolverBase implements Resolve<ISeriesVintageDatesResponse>{

  constructor(
    private service: SeriesService,
    protected bindingService: RouteToFormBindingService
  ) {
    super(bindingService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISeriesVintageDatesResponse> {
    let seriesId: string = route.paramMap.get('id');
    let queryString = this.buildQueryString(route, SeriesVintageDatesComponent.queryParamsToFormBindingValues);

    console.log("resolver queryString = " + queryString);

    return this.service.getVintageDates(seriesId, queryString);
  }

}
