import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { IReleaseDatesContainer, IReleasesDate } from '../../../fredapi/releases/releaseDates.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseService } from '../../../fredapi/releases/release.service';

@Component({
  selector: 'releasesDates',
  templateUrl: '../releasesDates/releasesDates.component.html'
})
export class ReleasesDatesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Releases Dates";

  // response
  response: IContainerExtensions;
  container: IReleaseDatesContainer<IReleasesDate>;
  releaseDates: IReleasesDate[];

  get dataName(): string {
    return "releasesDates";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.dateRange,
      this.configurationService.getList("release_date", "desc"),
      this.configurationService.includeReleaseDatesWithNoData
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("realtime_start", "startDate"),
      new RouteToFormBinding("realtime_end", "endDate"),
      new RouteToFormBinding("limit"),
      new RouteToFormBinding("offset"),
      new RouteToFormBinding("order_by", "orderBy"),
      new RouteToFormBinding("sort_order", "sortOrder"),
      new RouteToFormBinding("include_release_dates_with_no_data", "includeReleaseDatesWithNoData")
    ];
  }

  get navigationRoute(): any[] {
    return ["/releasesDates/"];
  }

  constructor(
    router: Router,
    route: ActivatedRoute,
    formBuilder: FormBuildAndValidationService,
    configurationService: FormsConfigurationService,
    bindingService: RouteToFormBindingService,
    private service: ReleaseService) {

    super(router, route, formBuilder, configurationService, bindingService);
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.releaseDates = data.container && data.container.release_dates;
  }

  callService(queryString: string): Observable<any> {
    return this.service.getReleasesDates(queryString);
  }

}
