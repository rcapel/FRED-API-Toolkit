import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICategory } from '../../../fredapi/categories/category.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  heading: string = "Category";

  // request arguments
  categoryId: number;

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
    this.route.data.subscribe(data => {
        console.log(data['category']);
        this.parseData(data['category']);
      }
    );
  }

  parseData(data) {
    this.response = data;
    this.categories = data.container && data.container.categories;
  }

  onSubmit() {
    this.router.navigate(["/category/" + this.categoryId]);
  }

}
