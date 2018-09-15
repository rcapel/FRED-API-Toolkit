import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { ISeriesContainer, ISeries } from '../../../fredapi/series/series.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesService } from '../../../fredapi/series/series.service';

@Component({
  selector: 'series',
  templateUrl: './series.component.html'
})
export class SeriesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Series";

  // response
  response: IContainerExtensions;
  container: ISeriesContainer;
  seriess: ISeries[];

  get dataName(): string {
    return "series";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Series"),
      this.configurationService.dateRange
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("id")
    ];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("realtime_start", "startDate"),
      new RouteToFormBinding("realtime_end", "endDate")
    ];
  }

  get navigationRoute(): any[] {
    let seriesId = this.theForm.get("id").value;
    return ["/series/", seriesId];
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
    this.seriess = data.container && data.container.seriess;
  }

  callService(queryString: string): Observable<any> {
    let seriesId = this.theForm.get("id").value;
    return this.service.get(seriesId, queryString);
  }

}
