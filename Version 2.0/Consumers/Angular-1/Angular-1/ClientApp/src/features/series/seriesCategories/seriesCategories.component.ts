import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICategory } from '../../../fredapi/categories/category.interfaces';
import { IContainerExtensions } from '../../../fredapi/shared/shared.interfaces';

@Component({
  selector: 'seriesCategories',
  templateUrl: './seriesCategories.component.html'
})
export class SeriesCategoriesComponent implements OnInit {

  heading: string = "Series Categories";

  // request arguments
  seriesId: string;

  // response
  response: IContainerExtensions;
  categories: ICategory[];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.seriesId = data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['seriesCategories']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data;
    this.categories = data.container && data.container.categories;
  }

  onSubmit() {
    this.router.navigate(["/seriesCategories/" + this.seriesId]);
  }

}
