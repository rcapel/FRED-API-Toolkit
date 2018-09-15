import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { ISourceContainer, ISource } from '../../../fredapi/sources/source.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SourceService } from '../../../fredapi/sources/source.service';

@Component({
  selector: 'source',
  templateUrl: './source.component.html'
})
export class SourceComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Source";
  static queryParamsToFormBindingValues: RouteToFormBinding[] = [
    new RouteToFormBinding("realtime_start", "startDate"),
    new RouteToFormBinding("realtime_end", "endDate")
  ];

  // response
  response: IContainerExtensions;
  container: ISourceContainer;
  sources: ISource[];

  get dataName(): string {
    return "source";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Source"),
      this.configurationService.dateRange
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("id")
    ];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return SourceComponent.queryParamsToFormBindingValues;
  }

  get navigationRoute(): any[] {
    let sourceId = this.theForm.get("id").value;
    return ["/source/", sourceId];
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
    let sourceId = this.theForm.get("id").value;
    return this.service.getSource(sourceId, queryString);
  }

}
