import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription, Observable } from "rxjs";

import { OrderByEnumerables } from "../shared/enumerables/orderBy.enumerables";
import { FilterEnumerables } from "../shared/enumerables/filter.enumerables";
import { TagEnumerables } from "../shared/enumerables/tag.enumerables";
import { FormBuildAndValidationService } from "../../shared/formBuildAndValidation/formBuildAndValidation.service";
import { FormsConfigurationService, IFormsConfiguration } from "../shared/formsConfiguration/formsConfiguration.service";
import { RouteToFormBindingService, RouteToFormBinding } from "../../shared/routeToFormBinding/routeToFormBinding.service";

export abstract class ComponentBase {
  private paramMapSubscription: Subscription;
  private queryParamMapSubscription: Subscription;
  private dataSubscription: Subscription; 
  private serviceSubscription: Subscription;

  protected canRefresh = true;

  theForm: FormGroup;
  seriesOrderByEnumerables: string[] = OrderByEnumerables.series;
  tagsOrderByEnumerables: string[] = OrderByEnumerables.tags;
  releasesOrderByEnumerables: string[] = OrderByEnumerables.releases;
  releasesDatesOrderByEnumerables: string[] = OrderByEnumerables.releasesDates;
  seriesSearchOrderByEnumerables: string[] = OrderByEnumerables.seriesSearch;
  sourcesOrderByEnumerables: string[] = OrderByEnumerables.sources;
  filterEnumerables: string[] = FilterEnumerables.filterVariables;
  tagGroupIdEnumerables: string[] = TagEnumerables.tagGroupIds;

  get idValidationMessages(): string {
    return this.configurationService.idValidationMessages;
  }

  get tagNamesValidationMessages(): string {
    return this.configurationService.tagNamesValidationMessages;
  }

  get searchTextValidationMessages(): string {
    return this.configurationService.searchTextValidationMessages;
  }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected formBuilder: FormBuildAndValidationService,
    protected configurationService: FormsConfigurationService,
    protected bindingService: RouteToFormBindingService
  ) { }

  ngOnInit() {
    this.theForm = this.formBuilder.build(this.formsConfigurations);
    this.paramMapSubscription = this.route.paramMap.subscribe((data: ParamMap) => {
      this.bindingService.bindRouteParams(data, this.theForm, this.routeParamsToFormBindings);
    });
    this.queryParamMapSubscription = this.route.queryParamMap.subscribe((data: ParamMap) => {
      this.bindingService.bindQueryParams(data, this.theForm, this.queryParamsToFormBindings);
    });
    this.dataSubscription = this.route.data.subscribe(data => {
      this.parseData(data[this.dataName]);
    });
  }

  ngOnDestroy() {
    if (this.paramMapSubscription) {
      this.paramMapSubscription.unsubscribe();
    }
    if (this.queryParamMapSubscription) {
      this.queryParamMapSubscription.unsubscribe();
    }
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }
  }

  onSubmit() {
    let queryParams = this.bindingService.buildQueryParamsFromForm(this.theForm, this.queryParamsToFormBindings);
    this.removeDefaultQueryParams(queryParams, "");
    this.router.navigate(this.navigationRoute, { queryParams: queryParams });

    if (this, this.canRefresh) {
      let queryString: string = this.bindingService.getQueryStringFrom(queryParams);
      this.serviceSubscription = this.callService(queryString).subscribe(data =>
        this.parseData(data));
    }
  }

  removeDefaultQueryParams(queryParams: { [key: string]: string }, orderByDefault: string): void {
    if (queryParams["order_by"] === orderByDefault) {
      delete queryParams["order_by"];
    }
    if (queryParams["sort_order"] === "asc") {
      delete queryParams["sort_order"];
    }
    if (queryParams["filter_variable"] === "") {
      delete queryParams["filter_variable"];
    }
    if (queryParams["tag_group_id"] === "") {
      delete queryParams["tag_group_id"]; 
    }
    if (queryParams["include_release_dates_with_no_data"] === "no") {
      delete queryParams["include_release_dates_with_no_data"]; 
    }
  }

  abstract get dataName(): string;
  abstract get formsConfigurations(): IFormsConfiguration[];
  abstract get routeParamsToFormBindings(): RouteToFormBinding[];
  abstract get queryParamsToFormBindings(): RouteToFormBinding[];
  abstract get navigationRoute(): any[];

  abstract parseData(data: any): void;
  abstract callService(queryString: string): Observable<any>;

}
