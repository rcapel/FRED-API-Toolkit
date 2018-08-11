import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from '../../../fredapi/categories/category.service';
import { ICategoryResponse, ICategoryContainer, ICategory } from '../../../fredapi/categories/category.interfaces';

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

    // to use a resolver, replace the code above with the following,
    // remove fetch(), and also value the categoryId
    //let data = this.route.snapshot.data["category"];
    //console.log(data);
    //this.categories = data.container.categories;
    //this.fetchMessage = data.fetchMessage;
    //this.url = data.url;
    //console.log(this.categories);
  }

  fetch() {
    this.service.get(this.categoryId).subscribe(
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
    this.router.navigate(["/category/" + this.categoryId]);
  }

}
