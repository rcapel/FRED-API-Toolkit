import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { IVintageDateContainer } from '../../../fredapi/series/seriesVintageDates.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesService } from '../../../fredapi/series/series.service';

@Component({
  selector: 'seriesVintageDates',
  templateUrl: './seriesVintageDates.component.html'
})
export class SeriesVintageDatesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Series Vintage Dates";

  // response
  response: IContainerExtensions;
  container: IVintageDateContainer;
  vintageDates: Date[];

  get dataName(): string {
    return "seriesVintageDates";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Series"),
      this.configurationService.dateRange,
      this.configurationService.getList()
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
      new RouteToFormBinding("sort_order", "sortOrder")
    ];
  }

  get navigationRoute(): any[] {
    let seriesId = this.theForm.get("id").value;
    return ["/seriesVintageDates/", seriesId];
  }

  constructor(
    router: Router,
    route: ActivatedRoute,
    formBuilder: FormBuildAndValidationService,
    configurationService: FormsConfigurationService,
    bindingService: RouteToFormBindingService,
    private service: SeriesService) {

    super(router, route, formBuilder, configurationService, bindingService);
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.vintageDates = data.container && data.container.vintage_dates;
  }

  callService(queryString: string): Observable<any> {
    let seriesId = this.theForm.get("id").value;
    return this.service.getVintageDates(seriesId, queryString);
  }

}
