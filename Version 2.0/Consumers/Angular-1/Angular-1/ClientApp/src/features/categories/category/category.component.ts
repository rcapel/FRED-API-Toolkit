import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentBase } from '../../componentBase/component.base';

import { ICategory } from '../../../fredapi/categories/category.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

import { FormBuildAndValidationService } from '../../../shared/formBuildAndValidation/formBuildAndValidation.service';
import { FormsConfigurationService, IFormsConfiguration } from '../../shared/formsConfiguration/formsConfiguration.service';
import { RouteToFormBindingService, RouteToFormBinding } from '../../../shared/routeToFormBinding/routeToFormBinding.service';
import { CategoryService } from '../../../fredapi/categories/category.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html'
})
export class CategoryComponent extends ComponentBase implements OnInit, OnDestroy {

  heading: string = "Category";

  // response
  response: IContainerExtensions;
  categories: ICategory[];

  get dataName(): string {
    return "category";
  }

  get formsConfigurations(): IFormsConfiguration[] {
    return [
      this.configurationService.getId("Category")
    ];
  }

  get routeParamsToFormBindings(): RouteToFormBinding[] {
    return [
      new RouteToFormBinding("id", "id")
    ];
  }

  get queryParamsToFormBindings(): RouteToFormBinding[] {
    return [];
  }

  get navigationRoute(): any[] {
    let categoryId = this.theForm.get("id").value;
    return ["/category/", categoryId];
  }

  constructor(
    router: Router,
    route: ActivatedRoute,
    formBuilder: FormBuildAndValidationService,
    configurationService: FormsConfigurationService,
    bindingService: RouteToFormBindingService,
    private service: CategoryService) {

    super(router, route, formBuilder, configurationService, bindingService);
    this.canRefresh = false;
  }

  parseData(data) {
    this.response = data;
    this.categories = data.container && data.container.categories;
  }

  callService(queryString: string): Observable<any> {
    let categoryId = this.theForm.get("id").value;
    return this.service.get(+categoryId);
  }

}
