import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { ISourceContainer, ISource } from '../../../fredapi/sources/source.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { ReleaseService } from '../../../fredapi/releases/release.service';

@Component({
  selector: 'releaseSources',
  templateUrl: './releaseSources.component.html'
})
export class ReleaseSourcesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Release Sources";

  // response
  response: IContainerExtensions;
  container: ISourceContainer;
  sources: ISource[];

  get dataName(): string {
    return "releaseSources";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Release"),
      this.configurationService.dateRange
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
      new RouteToFormBinding("realtime_end", "endDate")
    ];
  }

  get navigationRoute(): any[] {
    let releaseId = this.theForm.get("id").value;
    return ["/releaseSources/", releaseId];
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
    this.sources = data.container && data.container.sources;
  }

  callService(queryString: string): Observable<any> {
    let releaseId = this.theForm.get("id").value;
    return this.service.getSources(+releaseId, queryString);
  }

}
