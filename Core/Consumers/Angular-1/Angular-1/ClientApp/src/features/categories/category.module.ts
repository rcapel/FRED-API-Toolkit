import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FredapiModule } from '../../fredapi/fredapi.module';

import { CategoryComponent } from './category/category.component';
import { CategoryChildrenComponent } from './categoryChildren/categoryChildren.component';
import { CategoryResolver } from './services/category.resolver';
import { CategoryChildrenResolver } from './services/categoryChildren.resolver';

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
      { path: 'category/:id', component: CategoryComponent, resolve: { category: CategoryResolver } },
      { path: 'categoryChildren/:id', component: CategoryChildrenComponent, resolve: { categoryChildren: CategoryChildrenResolver } }
    ]),
    FredapiModule
  ],
  providers: [
    CategoryResolver,
    CategoryChildrenResolver
  ]
})
export class CategoryModule { }
