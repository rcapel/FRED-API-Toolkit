import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../componentBase/component.base';

import { ITagContainer, ITag } from '../../../fredapi/tags/tag.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { TagService } from '../../../fredapi/tags/tag.service';

@Component({
  selector: 'relatedTags',
  templateUrl: './relatedTags.component.html'
})
export class RelatedTagsComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Related Tags";

  // response
  response: IContainerExtensions;
  container: ITagContainer;
  tags: ITag[];

  get dataName(): string {
    return "relatedTags";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.tagNamesRequired,
      this.configurationService.dateRange,
      this.configurationService.getList("series_count"),
      this.configurationService.excludeTagNames,
      this.configurationService.tagGroupId,
      this.configurationService.searchText
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
      new RouteToFormBinding("exclude_tag_names", "excludeTagNames"),
      new RouteToFormBinding("tag_group_id", "tagGroupId"),
      new RouteToFormBinding("search_text", "searchText")
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
    this.tags = data.container.tags;
  }

  callService(queryString: string): Observable<any> {
    let tagNames = this.theForm.get("tagNames").value;
    return this.service.getRelatedTags(tagNames, queryString);
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    super.removeDefaultQueryParams(queryParams, "series_count");
  }

}
