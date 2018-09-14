import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

import { CategoryComponent } from './category/category.component';
import { CategoryChildrenComponent } from './categoryChildren/categoryChildren.component';
import { CategoryRelatedComponent } from './categoryRelated/categoryRelated.component';
import { CategorySeriesComponent } from './categorySeries/categorySeries.component';
import { CategoryTagsComponent } from './categoryTags/categoryTags.component';
import { CategoryRelatedTagsComponent } from './categoryRelatedTags/categoryRelatedTags.component';

import { CategoryResolver } from './services/category.resolver';
import { CategoryChildrenResolver } from './services/categoryChildren.resolver';
import { CategoryRelatedResolver } from './services/categoryRelated.resolver';
import { CategorySeriesResolver } from './services/categorySeries.resolver';
import { CategoryTagsResolver } from './services/categoryTags.resolver';
import { CategoryRelatedTagsResolver } from './services/categoryRelatedTags.resolver';

import { FormsConfigurationService } from '../shared/formsConfiguration/formsConfiguration.service'

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryChildrenComponent,
    CategoryRelatedComponent,
    CategorySeriesComponent,
    CategoryTagsComponent,
    CategoryRelatedTagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      //{ path: 'category', component: CategoryComponent },
      { path: 'category/:id', component: CategoryComponent, resolve: { category: CategoryResolver } },
      { path: 'categoryChildren/:id', component: CategoryChildrenComponent, resolve: { categoryChildren: CategoryChildrenResolver } },
      { path: 'categoryRelated/:id', component: CategoryRelatedComponent, resolve: { categoryRelated: CategoryRelatedResolver } },
      { path: 'categorySeries/:id', component: CategorySeriesComponent, resolve: { categorySeries: CategorySeriesResolver } },
      { path: 'categoryTags/:id', component: CategoryTagsComponent, resolve: { categoryTags: CategoryTagsResolver } },
      { path: 'categoryRelatedTags/:id/:tag_names', component: CategoryRelatedTagsComponent, resolve: { categoryRelatedTags: CategoryRelatedTagsResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    CategoryResolver,
    CategoryChildrenResolver,
    CategoryRelatedResolver,
    CategorySeriesResolver,
    CategoryTagsResolver,
    CategoryRelatedTagsResolver,
    FormsConfigurationService
  ]
})
export class CategoryModule { }
