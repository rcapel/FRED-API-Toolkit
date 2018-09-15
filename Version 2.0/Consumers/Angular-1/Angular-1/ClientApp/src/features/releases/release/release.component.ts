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
  selector: 'release',
  templateUrl: './release.component.html'
})
export class ReleaseComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Release";

  // response
  response: IContainerExtensions;
  container: IReleaseContainer;
  releases: IRelease[];

  get dataName(): string {
    return "release";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Release"),
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
      new RouteToFormBinding("realtime_end", "endDate"),
      new RouteToFormBinding("limit"),
      new RouteToFormBinding("offset"),
      new RouteToFormBinding("sort_order", "sortOrder")
    ];
  }

  get navigationRoute(): any[] {
    let releaseId = this.theForm.get("id").value;
    return ["/release/", releaseId];
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
    let releaseId = this.theForm.get("id").value;
    return this.service.get(+releaseId, queryString);
  }

}
