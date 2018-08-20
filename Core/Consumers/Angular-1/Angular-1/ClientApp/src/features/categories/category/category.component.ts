import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICategory } from '../../../fredapi/categories/category.interfaces';

@Component({
  selector: 'category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  heading: string = "Category";

  // request arguments
  categoryId: number;

  // response
  categories: ICategory[];
  fetchMessage: string;
  url: string;

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
    this.categories = data.container.categories;
    this.fetchMessage = data.fetchMessage;
    this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/category/" + this.categoryId]);
  }

}
