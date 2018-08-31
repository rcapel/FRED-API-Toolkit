import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICategory } from '../../../fredapi/categories/category.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'categoryRelated',
  templateUrl: './categoryRelated.component.html'
})
export class CategoryRelatedComponent implements OnInit {

  heading: string = "Category Related";

  // request arguments
  categoryId: number;
  startDate: string;
  endDate: string;

  // response
  response: IContainerExtensions;
  categories: ICategory[];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.categoryId = +data.get("id");
    });
    this.route.queryParamMap.subscribe(data => {
      this.startDate = data.get("realtime_start");
      this.endDate = data.get("realtime_end");
    });
    this.route.data.subscribe(data => {
      console.log(data['categoryRelated']);
      this.parseData(data['categoryRelated']);
    }
    );
  }

  parseData(data) {
    this.response = data;
    this.categories = data.container && data.container.categories;
  }

  onSubmit() {
    this.router.navigate(["/categoryRelated/" + this.categoryId],
      {
        queryParams:
          {
            realtime_start: this.startDate,
            realtime_end: this.endDate
          }
      });
  }

}
