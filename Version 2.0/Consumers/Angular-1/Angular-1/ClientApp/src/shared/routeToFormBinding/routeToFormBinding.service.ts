import { Injectable } from "@angular/core";
import { ParamMap } from "@angular/router";
import { FormGroup } from "@angular/forms";

@Injectable()
export class RouteToFormBindingService {

  bindRouteParams(data: ParamMap, theForm: FormGroup, bindings: RouteToFormBinding[]): void {
    for (let binding of bindings) {
      this.patchValue(data, binding, theForm);
    }
  }

  bindQueryParams(data: ParamMap, theForm: FormGroup, bindings: RouteToFormBinding[]): void {
    for (let binding of bindings) {
      this.patchValue(data, binding, theForm);
    }
  }

  buildQueryParamsFromRoute(paramMap: ParamMap, bindings: RouteToFormBinding[]): { [key: string]: string } {
    let result = {};
    for (let binding of bindings) {
      let paramName = binding.paramName;
      let value = paramMap.get(paramName);
      if (value && value !== "") {
        result[paramName] = value;
      }
    }
    return result;
  }

  buildQueryParamsFromForm(theForm: FormGroup, bindings: RouteToFormBinding[]): { [key: string]: string } {
    let result = {};
    for (let binding of bindings) {
      let formName = binding.formName;
      let value = theForm.get(formName).value;
      if (value && value !== "") {
        result[binding.paramName] = value;
      }
    }
    return result;
  }

  getQueryStringFrom(queryParams: { [key: string]: string }): string {
    let queryString: string = "?";
    for (let key in queryParams) {
      let ampersand = queryString.length > 1 ? "&" : "";
      if (queryParams[key] && queryParams[key] !== "") {
        queryString += `${ampersand}${key}=${queryParams[key]}`;
      }
    }
    return queryString;
  }

  private patchValue(data: ParamMap, binding: RouteToFormBinding, theForm: FormGroup) {
    let value = data.get(binding.paramName);
    if (!value) {
      return;
    }
    let formName = binding.formName;
    theForm.patchValue({ [formName]: value });
    console.log(`bound ${formName} and ${value}`);
  }

}

export class RouteToFormBinding {
  constructor(
    public paramName: string,
    private _formName: string = "") {
  }

  get formName(): string {
    return this._formName === "" ? this.paramName : this._formName;
  }

}
