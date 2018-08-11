import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CategoryService } from '../fredapi/categories/category.service';
import { SourcesService } from '../fredapi/sources/sources.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    SourcesService
  ]
})
export class FredapiModule { }
