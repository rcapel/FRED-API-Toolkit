import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseService } from '../../../fredapi/releases/release.service';

@Component({
  selector: 'releases',
  templateUrl: './releases.component.html'
})
export class ReleasesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Releases";

  // response
  response: IContainerExtensions;
  container: IReleaseContainer;
  releases: IRelease[];

  get dataName(): string {
    return "releases";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.dateRange,
      this.configurationService.getList("release_id")
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
      new RouteToFormBinding("sort_order", "sortOrder")
    ];
  }

  get navigationRoute(): any[] {
    return ["/releases/"];
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
    this.releases = data.container && data.container.releases;
  }

  callService(queryString: string): Observable<any> {
    return this.service.getReleases(queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "release_id");
  }

}
