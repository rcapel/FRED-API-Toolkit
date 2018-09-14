import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../componentBase/component.base';

import { ISourceResponse, ISourceContainer, ISource } from '../../../fredapi/sources/source.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SourceService } from '../../../fredapi/sources/source.service';

@Component({
  selector: 'sources',
  templateUrl: './sources.component.html'
})
export class SourcesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Sources";

  // response
  response: IContainerExtensions;
  container: ISourceContainer
  sources: ISource[];

  get dataName(): string {
    return "sources";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.dateRange,
      this.configurationService.getList("source_id")
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
    return ["/sources/"];
  }

  constructor(
    router: Router,
    route: ActivatedRoute,
    formBuilder: FormBuildAndValidationService,
    configurationService: FormsConfigurationService,
    bindingService: RouteToFormBindingService,
    private service: SourceService) {

    super(router, route, formBuilder, configurationService, bindingService);
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.sources = data.container.sources;
  }

  callService(queryString: string): Observable<any> {
    return this.service.get(queryString);
  }
  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "source_id");
  }


}
