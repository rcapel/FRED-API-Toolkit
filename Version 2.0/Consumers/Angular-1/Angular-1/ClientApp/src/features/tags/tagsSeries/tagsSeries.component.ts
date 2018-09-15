import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { ISeries, ISeriesContainer } from '../../../fredapi/series/series.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { TagService } from '../../../fredapi/tags/tag.service';

@Component({
  selector: 'tagsSeries',
  templateUrl: './tagsSeries.component.html'
})
export class TagsSeriesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Tags Series";

  // response
  response: IContainerExtensions;
  container: ISeriesContainer;
  seriess: ISeries[];

  get dataName(): string {
    return "tagsSeries";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.tagNamesRequired,
      this.configurationService.dateRange,
      this.configurationService.getList("series_id"),
      this.configurationService.excludeTagNames
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("tag_names", "tagNames")
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
      new RouteToFormBinding("exclude_tag_names", "excludeTagNames")
    ];
  }

  get navigationRoute(): any[] {
    let tagNames = this.theForm.get("tagNames").value;
    return ["/relatedTags/", tagNames];
  }

  constructor(
    router: Router,
    route: ActivatedRoute,
    formBuilder: FormBuildAndValidationService,
    configurationService: FormsConfigurationService,
    bindingService: RouteToFormBindingService,
    private service: TagService) {

    super(router, route, formBuilder, configurationService, bindingService);
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.seriess = data.container && data.container.seriess;
  }

  callService(queryString: string): Observable<any> {
    let tagNames = this.theForm.get("tagNames").value;
    return this.service.getTagsSeries(tagNames, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "series_id");
  }

}
