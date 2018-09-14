import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../componentBase/component.base';

import { ICategory } from '../../../fredapi/categories/category.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { SeriesService } from '../../../fredapi/series/series.service';

@Component({
  selector: 'seriesCategories',
  templateUrl: './seriesCategories.component.html'
})
export class SeriesCategoriesComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Series Categories";

  // response
  response: IContainerExtensions;
  categories: ICategory[];

  get dataName(): string {
    return "seriesCategories";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Series"),
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
    let seriesId = this.theForm.get("id").value;
    return ["/seriesCategories/", seriesId];
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
    this.categories = data.container && data.container.categories;
  }

  callService(queryString: string): Observable<any> {
    let seriesId = this.theForm.get("id").value;
    return this.service.getCategories(seriesId, queryString);
  }

}
