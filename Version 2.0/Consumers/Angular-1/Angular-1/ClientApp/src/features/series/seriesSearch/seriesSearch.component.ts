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
  selector: 'seriesSearch',
  templateUrl: './seriesSearch.component.html'
})
export class SeriesSearchComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Series Search";

  // response
  response: IContainerExtensions;
  container: ISeriesContainer;
  seriess: ISeries[];

  get dataName(): string {
    return "seriesSearch";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.searchTextRequired,
      this.configurationService.searchType,
      this.configurationService.dateRange,
      this.configurationService.getList("search_rank"),
      this.configurationService.filters,
      this.configurationService.tagNames,
      this.configurationService.excludeTagNames
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("search_text", "searchText")
    ];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("search_type", "searchType"),
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
    let searchText = this.theForm.get("searchText").value;
    return ["/seriesSearch/", searchText];
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
    let searchText = this.theForm.get("searchText").value;
    return this.service.getSearch(searchText, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    let searchType = this.theForm.get("searchType").value;
    super.removeDefaultQueryParams(queryParams, searchType == "full_text" ? "search_rank" : "series_id");
  }

}
