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
  selector: 'categoryRelatedTags',
  templateUrl: './categoryRelatedTags.component.html'
})
export class CategoryRelatedTagsComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Category Related Tags";

  // response
  response: IContainerExtensions;
  container: ITagContainer;
  tags: ITag[];

  get dataName(): string {
    return "categoryRelatedTags";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Category"),
      this.configurationService.dateRange,
      this.configurationService.getList("series_count"),
      this.configurationService.tagNamesRequired,
      this.configurationService.excludeTagNames,
      this.configurationService.tagGroupId,
      this.configurationService.searchText
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("id"),
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
      new RouteToFormBinding("tag_names", "tagNames"),
      new RouteToFormBinding("exclude_tag_names", "excludeTagNames"),
      new RouteToFormBinding("tag_group_id", "tagGroupId"),
      new RouteToFormBinding("search_text", "searchText")
    ];
  }

  get navigationRoute(): any[] {
    let categoryId = this.theForm.get("id").value;
    let tagNames = this.theForm.get("tagNames").value;
    return ["/categoryRelatedTags/", categoryId, tagNames];
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
    let tagNames = this.theForm.get("tagNames").value;
    return this.service.getRelatedTags(+categoryId, tagNames, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "series_count");
  }

}
