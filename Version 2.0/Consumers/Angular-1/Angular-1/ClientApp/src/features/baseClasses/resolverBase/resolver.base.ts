import { ActivatedRouteSnapshot } from "@angular/router";

import { RouteToFormBindingService, RouteToFormBinding } from "../../../shared/routeToFormBinding/routeToFormBinding.service";

export abstract class ResolverBase {
  constructor(
    protected bindingService: RouteToFormBindingService
  ) { }

  buildQueryString(route: ActivatedRouteSnapshot, bindings: RouteToFormBinding[]) {
    let queryParams = this.bindingService.buildQueryParamsFromRoute(route.queryParamMap, bindings);
    let queryString: string = this.bindingService.getQueryStringFrom(queryParams);
    queryString = queryString === "?" ? "" : queryString;

    return queryString;
  }

}
