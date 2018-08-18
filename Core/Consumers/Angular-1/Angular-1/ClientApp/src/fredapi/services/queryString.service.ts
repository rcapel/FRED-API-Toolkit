import { Injectable, Inject, OnInit } from '@angular/core';

@Injectable()
export class QueryStringService {

  private parameterNames: Map<string, string> = new Map<string, string>([
    ["start", "realtime_start"],
    ["end", "realtime_end"],
    ["limit", "limit"],
    ["offset", "offset"],
    ["orderBy", "order_by"],
    ["sortOrder", "sort_order"],
    ["filterVariable", "filter_variable"],
    ["filterValue", "filter_value"],
    ["tagNames", "tag_Names"],
    ["excludedTagNames", "excluded_tag_names"]
  ]);

  addFragment(name: string, value: any): string {
    if (!value)
      return "";

    let parameterName = this.parameterNames.get(name);
    if (parameterName === undefined) {
      alert("Parameter name " + name + " not found.")
      return "";
    }
    let queryString: string = parameterName + "=" + value + "&";

    return queryString;
  }

  final(queryString: string): string {
    return queryString.substring(0, queryString.length - 1);
  }

  formatDate(date: Date): string {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join('-');
  }

}

