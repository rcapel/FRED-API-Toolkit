import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { IReleaseContainer, IRelease } from '../../../fredapi/releases/release.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SourceService } from '../../../fredapi/sources/source.service';

@Component({
  selector: 'sourceReleases',
  templateUrl: './sourceReleases.component.html'
})
export class SourceReleasesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Source Releases";

  // response
  response: IContainerExtensions;
  container: IReleaseContainer;
  releases: IRelease[];

  get dataName(): string {
    return "sourceReleases";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Source"),
      this.configurationService.dateRange,
      this.configurationService.getList("release_id"),
      this.configurationService.tagNames,
      this.configurationService.tagGroupId,
      this.configurationService.searchText
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
      new RouteToFormBinding("sort_order", "sortOrder")
    ];
  }

  get navigationRoute(): any[] {
    let sourceId = this.theForm.get("id").value;
    return ["/sourceReleases/", sourceId];
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
    this.releases = data.container.releases;
  }

  callService(queryString: string): Observable<any> {
    let sourceId = this.theForm.get("id").value;
    return this.service.getSourceReleases(sourceId, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "release_id");
  }

}
