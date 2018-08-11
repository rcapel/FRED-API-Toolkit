import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from '../../../fredapi/categories/category.service';
import { ICategoryResponse, ICategoryContainer, ICategory } from '../../../fredapi/categories/category.interfaces';

@Component({
  selector: 'categoryChildren',
  templateUrl: '../category/category.component.html'
})
export class CategoryChildrenComponent implements OnInit {

  heading: string = "CategoryChildren";

  // request arguments
  categoryId: number;

  // response
  categories: ICategory[];
  fetchMessage: string;
  url: string;

  constructor(
    private service: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.categoryId = +params.get('id');
        if (this.categoryId) {
          this.fetch();
        }
      }
    );
  }

  fetch() {
    this.service.get(this.categoryId, true).subscribe(
      data => {
        this.categories = data.container.categories;
        this.fetchMessage = data.fetchMessage;
        this.url = data.url;
        console.log(this.categories);
      },
      error => {
        console.log(error);
      },
      () => { /*complete*/ }
    );
  }

  onSubmit() {
    this.router.navigate(["/categoryChildren/" + this.categoryId]);
  }

}
