import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CategoryService } from '../fredapi/categories/category.service';
import { ReleaseService } from './releases/release.service';
import { SeriesService } from './series/series.service';
import { SourceService } from '../fredapi/sources/source.service';
import { TagService } from './tags/tag.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    ReleaseService,
    SeriesService,
    SourceService,
    TagService
  ]
})
export class FredapiModule { }
