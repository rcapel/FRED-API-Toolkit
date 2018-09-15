import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { ISeriesContainer, ISeries } from '../../../fredapi/series/series.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseService } from '../../../fredapi/releases/release.service';

@Component({
  selector: 'releaseSeries',
  templateUrl: './releaseSeries.component.html'
})
export class ReleaseSeriesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Release Series";

  // response
  response: IContainerExtensions;
  container: ISeriesContainer;
  seriess: ISeries[];

  get dataName(): string {
    return "releaseSeries";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Release"),
      this.configurationService.dateRange,
      this.configurationService.getList("series_id"),
      this.configurationService.filters,
      this.configurationService.tagNames,
      this.configurationService.excludeTagNames
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("id", "id")
    ];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("realtime_start", "startDate"),
      new RouteToFormBinding("realtime_end", "endDate"),
      new RouteToFormBinding("limit"),
      new RouteToFormBinding("offset"),
      new RouteToFormBinding("order_by", "orderBy"),
      new RouteToFormBinding("sort_order", "sortOrder"),
      new RouteToFormBinding("filter_variable", "filterVariable"),
      new RouteToFormBinding("filter_value", "filterValue"),
      new RouteToFormBinding("tag_names", "tagNames"),
      new RouteToFormBinding("exclude_tag_names", "excludeTagNames")
    ];
  }

  get navigationRoute(): any[] {
    let releaseId = this.theForm.get("id").value;
    return ["/releaseSeries/", releaseId];
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
    this.seriess = data.container && data.container.seriess;
  }

  callService(queryString: string): Observable<any> {
    let releaseId = this.theForm.get("id").value;
    return this.service.getSeries(+releaseId, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "series_id");
  }

}
