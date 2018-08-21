import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

import { SeriesComponent } from './series/series.component';
import { SeriesCategoriesComponent } from './seriesCategories/seriesCategories.component';
import { SeriesSearchRelatedTagsComponent } from './seriesSearchRelatedTags/seriesSearchRelatedTags.component';
import { SeriesSearchTagsComponent } from './seriesSearchTags/seriesSearchTags.component';
import { SeriesTagsComponent } from './seriesTags/seriesTags.component';

import { SeriesResolver } from '../series/services/series.resolver';
import { SeriesCategoriesResolver } from './services/seriesCategories.resolver';
import { SeriesSearchRelatedTagsResolver } from './services/seriesSearchRelatedTags.resolver';
import { SeriesSearchTagsResolver } from './services/seriesSearchTags.resolver';
import { SeriesTagsResolver } from './services/seriesTags.resolver';

@NgModule({
  declarations: [
    SeriesComponent,
    SeriesCategoriesComponent,
    SeriesSearchRelatedTagsComponent,
    SeriesSearchTagsComponent,
    SeriesTagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'series/:id', component: SeriesComponent, resolve: { series: SeriesResolver } },
      { path: 'seriesCategories/:id', component: SeriesCategoriesComponent, resolve: { seriesCategories: SeriesCategoriesResolver } },
      { path: 'seriesSearchRelatedTags/:series_search_text/:tag_names', component: SeriesSearchRelatedTagsComponent, resolve: { seriesSearchRelatedTags: SeriesSearchRelatedTagsResolver } },
      { path: 'seriesSearchTags/:id', component: SeriesSearchTagsComponent, resolve: { seriesSearchTags: SeriesSearchTagsResolver } },
      { path: 'seriesTags/:id', component: SeriesTagsComponent, resolve: { seriesTags: SeriesTagsResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    SeriesResolver,
    SeriesCategoriesResolver,
    SeriesSearchRelatedTagsResolver,
    SeriesSearchTagsResolver,
    SeriesTagsResolver
  ]
})
export class SeriesModule { }
