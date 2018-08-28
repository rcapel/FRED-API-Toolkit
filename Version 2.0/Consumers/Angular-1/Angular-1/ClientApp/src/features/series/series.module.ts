import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

import { SeriesComponent } from './series/series.component';
import { SeriesCategoriesComponent } from './seriesCategories/seriesCategories.component';
import { SeriesObservationsComponent } from './seriesObservations/seriesObservations.component';
import { SeriesReleaseComponent } from './seriesRelease/seriesRelease.component';
import { SeriesSearchComponent } from './seriesSearch/seriesSearch.component';
import { SeriesSearchRelatedTagsComponent } from './seriesSearchRelatedTags/seriesSearchRelatedTags.component';
import { SeriesSearchTagsComponent } from './seriesSearchTags/seriesSearchTags.component';
import { SeriesTagsComponent } from './seriesTags/seriesTags.component';
import { SeriesUpdatesComponent } from './seriesUpdates/seriesUpdates.component';
import { SeriesVintageDatesComponent } from './seriesVintageDates/seriesVintageDates.component';

import { SeriesResolver } from '../series/services/series.resolver';
import { SeriesCategoriesResolver } from './services/seriesCategories.resolver';
import { SeriesObservationsResolver } from './services/seriesObservations.resolver';
import { SeriesReleaseResolver } from './services/seriesRelease.resolver';
import { SeriesSearchResolver } from './services/seriesSearch.resolver';
import { SeriesSearchRelatedTagsResolver } from './services/seriesSearchRelatedTags.resolver';
import { SeriesSearchTagsResolver } from './services/seriesSearchTags.resolver';
import { SeriesTagsResolver } from './services/seriesTags.resolver';
import { SeriesUpdatesResolver } from './services/seriesUpdates.resolver';
import { SeriesVintageDatesResolver } from './services/seriesVintageDates.resolver';

@NgModule({
  declarations: [
    SeriesComponent,
    SeriesCategoriesComponent,
    SeriesObservationsComponent,
    SeriesReleaseComponent,
    SeriesSearchComponent,
    SeriesSearchRelatedTagsComponent,
    SeriesSearchTagsComponent,
    SeriesTagsComponent,
    SeriesUpdatesComponent,
    SeriesVintageDatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'series/:id', component: SeriesComponent, resolve: { series: SeriesResolver } },
      { path: 'seriesCategories/:id', component: SeriesCategoriesComponent, resolve: { seriesCategories: SeriesCategoriesResolver } },
      { path: 'seriesObservations/:id', component: SeriesObservationsComponent, resolve: { seriesObservations: SeriesObservationsResolver } },
      { path: 'seriesRelease/:id', component: SeriesReleaseComponent, resolve: { seriesRelease: SeriesReleaseResolver } },
      { path: 'seriesSearch/:search_text', component: SeriesSearchComponent, resolve: { seriesSearch: SeriesSearchResolver } },
      { path: 'seriesSearchRelatedTags/:series_search_text/:tag_names', component: SeriesSearchRelatedTagsComponent, resolve: { seriesSearchRelatedTags: SeriesSearchRelatedTagsResolver } },
      { path: 'seriesSearchTags/:id', component: SeriesSearchTagsComponent, resolve: { seriesSearchTags: SeriesSearchTagsResolver } },
      { path: 'seriesTags/:id', component: SeriesTagsComponent, resolve: { seriesTags: SeriesTagsResolver } },
      { path: 'seriesUpdates', component: SeriesUpdatesComponent, resolve: { seriesUpdates: SeriesUpdatesResolver } },
      { path: 'seriesVintageDates/:id', component: SeriesVintageDatesComponent, resolve: { seriesVintageDates: SeriesVintageDatesResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    SeriesResolver,
    SeriesCategoriesResolver,
    SeriesObservationsResolver,
    SeriesReleaseResolver,
    SeriesSearchResolver,
    SeriesSearchRelatedTagsResolver,
    SeriesSearchTagsResolver,
    SeriesTagsResolver,
    SeriesUpdatesResolver,
    SeriesVintageDatesResolver
  ]
})
export class SeriesModule { }
