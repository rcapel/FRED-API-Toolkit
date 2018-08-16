import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICategoryResponse, ICategoryContainer, ICategory } from '../../../fredapi/categories/category.interfaces';

@Component({
  selector: 'categoryChildren',
  templateUrl: './categoryChildren.component.html'
})
export class CategoryChildrenComponent implements OnInit {

  heading: string = "CategoryChildren";

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
      this.startDate = data.get("startDate");
      this.endDate = data.get("endDate");
    });
    this.route.data.subscribe(data => {
      console.log(data['categoryChildren']);
      this.parseData(data['categoryChildren']);
    }
    );
  }

  parseData(data) {
    this.categories = data.container.categories;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/categoryChildren/" + this.categoryId],
      {
        queryParams:
          {
            startDate: this.startDate,
            endDate: this.endDate
          }
        //queryParamsHandling: 'preserve'
      });
  }

}
