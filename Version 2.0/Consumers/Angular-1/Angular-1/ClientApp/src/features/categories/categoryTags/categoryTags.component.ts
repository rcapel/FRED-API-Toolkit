import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../baseClasses/componentBase/component.base';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { CategoryService } from '../../../fredapi/categories/category.service';

@Component({
  selector: 'categoryTags',
  templateUrl: './categoryTags.component.html'
})
export class CategoryTagsComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Category Tags";
  static queryParamsToFormBindingValues: RouteToFormBinding[] = [
    new RouteToFormBinding("realtime_start", "startDate"),
    new RouteToFormBinding("realtime_end", "endDate"),
    new RouteToFormBinding("limit"),
    new RouteToFormBinding("offset"),
    new RouteToFormBinding("order_by", "orderBy"),
    new RouteToFormBinding("sort_order", "sortOrder"),
    new RouteToFormBinding("tag_names", "tagNames"),
    new RouteToFormBinding("tag_group_id", "tagGroupId"),
    new RouteToFormBinding("search_text", "searchText")
  ];

  // response
  response: IContainerExtensions;
  container: ITagContainer;
  tags: ITag[];

  get dataName(): string {
    return "categoryTags";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Category"),
      this.configurationService.dateRange,
      this.configurationService.getList("series_count"),
      this.configurationService.tagNames,
      this.configurationService.tagGroupId,
      this.configurationService.searchText
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("id")
    ];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return CategoryTagsComponent.queryParamsToFormBindingValues;
  }

  get navigationRoute(): any[] {
    let categoryId = this.theForm.get("id").value;
    return ["/categoryTags/", categoryId];
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
    this.tags = data.container && data.container.tags;
  }

  callService(queryString: string): Observable<any> {
    let categoryId = this.theForm.get("id").value;
    return this.service.getTags(+categoryId, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "series_count");
  }

}
