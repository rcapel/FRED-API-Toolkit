/// <reference path="shared/pipes/filtervalue/filtervalue.pipe.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './shared/footer/footer.component';
import { FilterValuesComponent } from './shared/filterValues/filterValues.component';
import { SeriesGridHeaderComponent } from './shared/seriesGrid/seriesGridHeader.component';
import { SeriesGridDetailComponent } from './shared/seriesGrid/seriesGridDetail.component';
import { SourcesGridHeaderComponent } from './shared/sourcesGrid/sourcesGridHeader.component';
import { SourcesGridDetailComponent } from './shared/sourcesGrid/sourcesGridDetail.component';
import { TagsGridHeaderComponent } from './shared/tagsGrid/tagsGridHeader.component';
import { TagsGridDetailComponent } from './shared/tagsGrid/tagsGridDetail.component';

import { FredapiModule } from '../fredapi/fredapi.module';

import { AggregationMethodPipe } from './shared/pipes/aggregationMethod/aggregationMethod.pipe';
import { FilterValuePipe } from './shared/pipes/filterValue/filterValue.pipe';
import { FilterVariablePipe } from './shared/pipes/filterVariable/filterVariable.pipe';
import { FrequencyPipe } from './shared/pipes/frequency/frequency.pipe';
import { ObservationOrderByPipe } from './shared/pipes/observationOrderBy/observationOrderBy.pipe';
import { OutputTypePipe } from './shared/pipes/outputType/outputType.pipe';
import { ReleasesDatesOrderByPipe } from './shared/pipes/releasesDatesOrderBy/releasesDatesOrderBy.pipe';
import { ReleasesOrderByPipe } from './shared/pipes/releasesOrderBy/releasesOrderBy.pipe';
import { SearchTypePipe } from './shared/pipes/searchType/searchType.pipe';
import { SeriesOrderByPipe } from './shared/pipes/seriesOrderBy/seriesOrderBy.pipe';
import { SeriesSearchOrderByPipe } from './shared/pipes/seriesSearchOrderBy/seriesSearchOrderBy.pipe';
import { SortOrderPipe } from './shared/pipes/sortOrder/sortOrder.pipe';
import { SourcesOrderByPipe } from './shared/pipes/sourcesOrderBy/sourcesOrderBy.pipe';
import { TagsOrderByPipe } from './shared/pipes/tagsOrderBy/tagsOrderBy.pipe';
import { TagGroupIdPipe } from './shared/pipes/tagGroupId/tagGroupId.pipe';
import { UnitsPipe } from './shared/pipes/units/units.pipe';
import { VintageDatesOrderByPipe } from './shared/pipes/vintageDatesOrderBy/vintageDatesOrderBy.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    FilterValuesComponent,
    SeriesGridHeaderComponent,
    SeriesGridDetailComponent,
    SourcesGridHeaderComponent,
    SourcesGridDetailComponent,
    TagsGridDetailComponent,
    TagsGridHeaderComponent,
    AggregationMethodPipe,
    FilterValuePipe,
    FilterVariablePipe,
    FrequencyPipe,
    ObservationOrderByPipe,
    OutputTypePipe,
    ReleasesDatesOrderByPipe,
    ReleasesOrderByPipe,
    SearchTypePipe,
    SeriesOrderByPipe,
    SeriesSearchOrderByPipe,
    SortOrderPipe,
    SourcesOrderByPipe,
    TagGroupIdPipe,
    TagsOrderByPipe,
    UnitsPipe,
    VintageDatesOrderByPipe
  ],
  imports: [
    CommonModule,
    FredapiModule
  ],
  exports: [
    FooterComponent,
    FilterValuesComponent,
    SeriesGridHeaderComponent,
    SeriesGridDetailComponent,
    SourcesGridHeaderComponent,
    SourcesGridDetailComponent,
    TagsGridDetailComponent,
    TagsGridHeaderComponent,
    AggregationMethodPipe,
    FilterValuePipe,
    FilterVariablePipe,
    FrequencyPipe,
    ObservationOrderByPipe,
    OutputTypePipe,
    ReleasesDatesOrderByPipe,
    ReleasesOrderByPipe,
    SearchTypePipe,
    SeriesOrderByPipe,
    SeriesSearchOrderByPipe,
    SortOrderPipe,
    SourcesOrderByPipe,
    TagGroupIdPipe,
    TagsOrderByPipe,
    UnitsPipe,
    VintageDatesOrderByPipe
  ],
  providers: [
  ]
})
export class FeaturesCommonModule { }
