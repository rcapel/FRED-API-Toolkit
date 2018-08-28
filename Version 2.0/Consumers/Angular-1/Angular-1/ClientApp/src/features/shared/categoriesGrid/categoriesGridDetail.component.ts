import { Component, Input } from '@angular/core';

import { ICategory } from '../../../fredapi/categories/category.interfaces';

@Component({
  selector: 'categoriesGridDetail',
  templateUrl: './categoriesGridDetail.component.html'
})
export class CategoriesGridDetailComponent {
  @Input() category: ICategory;

}
