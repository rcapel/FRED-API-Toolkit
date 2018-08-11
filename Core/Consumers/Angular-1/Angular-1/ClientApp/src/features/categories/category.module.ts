import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FredapiModule } from '../../fredapi/fredapi.module';

import { CategoryComponent } from './category/category.component';
import { CategoryChildrenComponent } from './categoryChildren/categoryChildren.component';
//import { CategoryResolver } from './category/resolver.service';//uncomment to use a resolver

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryChildrenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      //{ path: 'category', component: CategoryComponent },
      { path: 'category/:id', component: CategoryComponent/*, resolve: { category: CategoryResolver }*/ },//uncomment to use a resolver
      { path: 'categoryChildren/:id', component: CategoryChildrenComponent }
    ]),
    FredapiModule
  ],
  providers: [
    //CategoryResolver//uncomment to use a resolver
  ]
})
export class CategoryModule { }
