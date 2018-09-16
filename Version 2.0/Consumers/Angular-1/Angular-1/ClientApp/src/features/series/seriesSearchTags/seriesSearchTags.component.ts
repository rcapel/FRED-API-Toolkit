import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesService } from '../../../fredapi/series/series.service';

@Component({
  selector: 'seriesSearchTags',
  templateUrl: './seriesSearchTags.component.html'
})
export class SeriesSearchTagsComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Series Search Tags";
  static queryParamsToFormBindingValues: RouteToFormBinding[] = [
    new RouteToFormBinding("realtime_start", "startDate"),
    new RouteToFormBinding("realtime_end", "endDate"),
    new RouteToFormBinding("limit"),
    new RouteToFormBinding("offset"),
    new RouteToFormBinding("order_by", "orderBy"),
    new RouteToFormBinding("sort_order", "sortOrder"),
    new RouteToFormBinding("tag_names", "tagNames"),
    new RouteToFormBinding("tag_group_id", "tagGroupId"),
    new RouteToFormBinding("tag_search_text", "tagSearchText")
  ];

  // response
  response: IContainerExtensions;
  container: ITagContainer;
  tags: ITag[];

  get dataName(): string {
    return "seriesSearchTags";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.searchTextRequired,
      this.configurationService.dateRange,
      this.configurationService.getList("series_count"),
      this.configurationService.tagNames,
      this.configurationService.tagGroupId,
      this.configurationService.tagSearchText
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("series_search_text", "searchText")
    ];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return SeriesSearchTagsComponent.queryParamsToFormBindingValues;
  }

  get navigationRoute(): any[] {
    let searchText = this.theForm.get("searchText").value;
    return ["/seriesSearchTags/", searchText];
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
    this.tags = data.container && data.container.tags;
  }

  callService(queryString: string): Observable<any> {
    let searchText = this.theForm.get("searchText").value;
    return this.service.getSearchTags(searchText, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "series_count");
  }

}
