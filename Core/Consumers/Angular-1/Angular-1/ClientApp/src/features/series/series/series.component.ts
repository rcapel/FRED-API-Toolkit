import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import { ICategoryResponse, ICategory } from '../../../fredapi/categories/category.interfaces';

@Component({
  selector: 'series',
  templateUrl: './series.component.html'
})
export class SeriesComponent implements OnInit {

  heading: string = "Series";

  // request arguments
  seriesId: number;

  // response
  //categories: ICategory[];
  fetchMessage: string;
  url: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.seriesId = +data.get("id");
    });
    this.route.data.subscribe(
      data => {
        this.parseData(data['series']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    //this.categories = data.container.categories;
    //this.fetchMessage = data.fetchMessage;
    //this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/series/" + this.seriesId]);
  }

}
