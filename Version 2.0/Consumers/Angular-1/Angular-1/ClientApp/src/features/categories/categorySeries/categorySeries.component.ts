import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { ISeriesContainer, ISeries } from '../../../fredapi/series/series.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { CategoryService } from '../../../fredapi/categories/category.service';

@Component({
  selector: 'categorySeries',
  templateUrl: './categorySeries.component.html'
})
export class CategorySeriesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Category Series";
  static queryParamsToFormBindingValues: RouteToFormBinding[] = [
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

  // response
  response: IContainerExtensions;
  container: ISeriesContainer;
  seriess: ISeries[];

  get dataName(): string {
    return "categorySeries";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Category"),
      this.configurationService.dateRange,
      this.configurationService.getList("series_id"),
      this.configurationService.filters,
      this.configurationService.tagNames,
      this.configurationService.excludeTagNames
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("id")
    ];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return CategorySeriesComponent.queryParamsToFormBindingValues;
  }

  get navigationRoute(): any[] {
    let categoryId = this.theForm.get("id").value;
    return ["/categorySeries/", categoryId];
  }

  constructor(
    router: Router,
    route: ActivatedRoute,
    formBuilder: FormBuildAndValidationService,
    configurationService: FormsConfigurationService,
    bindingService: RouteToFormBindingService,
    private service: CategoryService) {

    super(router, route, formBuilder, configurationService, bindingService);
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.container = data.container;
    this.seriess = data.container && data.container.seriess;
  }

  callService(queryString: string): Observable<any> {
    let categoryId = this.theForm.get("id").value;
    return this.service.getSeries(+categoryId, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "series_id");
  }

}
