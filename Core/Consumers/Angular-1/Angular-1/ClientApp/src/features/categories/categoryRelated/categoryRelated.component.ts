import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICategoryResponse, ICategory } from '../../../fredapi/categories/category.interfaces';

@Component({
  selector: 'categoryRelated',
  templateUrl: './categoryRelated.component.html'
})
export class CategoryRelatedComponent implements OnInit {

  heading: string = "CategoryRelated";

  // request arguments
  categoryId: number;
  startDate: string;
  endDate: string;

  // response
  categories: ICategory[];
  fetchMessage: string;
  url: string;

  constructor(
    //private service: CategoryService,
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
    this.categories = data.container.categories;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
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
