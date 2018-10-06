import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { ISeriesObservationsContainer, IObservation } from '../../../fredapi/series/seriesObservations.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesService } from '../../../fredapi/series/series.service';

@Component({
  selector: 'seriesObservations',
  templateUrl: './seriesObservations.component.html'
})
export class SeriesObservationsComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Series Observations";
  static queryParamsToFormBindingValues: RouteToFormBinding[] = [
    new RouteToFormBinding("realtime_start", "startDate"),
    new RouteToFormBinding("realtime_end", "endDate"),
    new RouteToFormBinding("limit"),
    new RouteToFormBinding("offset"),
    new RouteToFormBinding("sort_order", "sortOrder"),
    new RouteToFormBinding("observation_start", "observationStart"),
    new RouteToFormBinding("observation_end", "observationEnd"),
    new RouteToFormBinding("units"),
    new RouteToFormBinding("frequency"),
    new RouteToFormBinding("aggregation_method", "aggregationMethod"),
    new RouteToFormBinding("output_type", "outputType"),
    new RouteToFormBinding("vintage_dates", "vintageDates")
  ];

  // response
  response: IContainerExtensions;
  container: ISeriesObservationsContainer;
  observations: IObservation[];

  get dataName(): string {
    return "seriesObservations";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Series"),
      this.configurationService.dateRange,
      this.configurationService.getList(),
      this.configurationService.seriesObservations
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("id")
    ];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return SeriesObservationsComponent.queryParamsToFormBindingValues;
  }

  get navigationRoute(): any[] {
    let seriesId = this.theForm.get("id").value;
    return ["/seriesObservations/", seriesId];
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
    this.observations = data.container && data.container.observations;
  }

  callService(queryString: string): Observable<any> {
    let seriesId = this.theForm.get("id").value;
    return this.service.getTags(seriesId, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "");

    if (queryParams["aggregation_method"] === "avg") {
      delete queryParams["aggregation_method"];
    }
    if (queryParams["output_type"] === "1") {
      delete queryParams["output_type"];
    }
  }

}
