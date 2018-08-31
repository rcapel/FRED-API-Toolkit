/// <reference path="shared/pipes/filtervalue/filtervalue.pipe.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './shared/footer/footer.component';
import { FilterValuesComponent } from './shared/filterValues/filterValues.component';
import { CommonValuesComponent } from './shared/commonValues/commonValues.component';
import { CategoriesGridHeaderComponent } from './shared/categoriesGrid/categoriesGridHeader.component';
import { CategoriesGridDetailComponent } from './shared/categoriesGrid/categoriesGridDetail.component';
import { SeriesGridHeaderComponent } from './shared/seriesGrid/seriesGridHeader.component';
import { SeriesGridDetailComponent } from './shared/seriesGrid/seriesGridDetail.component';
import { SourcesGridHeaderComponent } from './shared/sourcesGrid/sourcesGridHeader.component';
import { SourcesGridDetailComponent } from './shared/sourcesGrid/sourcesGridDetail.component';
import { TagsGridHeaderComponent } from './shared/tagsGrid/tagsGridHeader.component';
import { TagsGridDetailComponent } from './shared/tagsGrid/tagsGridDetail.component';
import { NameValueGridHeaderComponent } from './shared/nameValueGrid/nameValueGridHeader.component';
import { NameValueGridDetailComponent } from './shared/nameValueGrid/nameValueGridDetail.component';
import { FredapiModule } from '../fredapi/fredapi.module';

import { AggregationMethodPipe } from './shared/pipes/aggregationMethod/aggregationMethod.pipe';
import { FilterValuePipe } from './shared/pipes/filterValue/filterValue.pipe';
import { FilterVariablePipe } from './shared/pipes/filterVariable/filterVariable.pipe';
import { FrequencyPipe } from './shared/pipes/frequency/frequency.pipe';
import { OutputTypePipe } from './shared/pipes/outputType/outputType.pipe';
import { SearchTypePipe } from './shared/pipes/searchType/searchType.pipe';
import { SortOrderPipe } from './shared/pipes/sortOrder/sortOrder.pipe';
import { TagGroupIdPipe } from './shared/pipes/tagGroupId/tagGroupId.pipe';
import { UnitsPipe } from './shared/pipes/units/units.pipe';
import { OrderByPipe } from './shared/pipes/orderBy/orderBy.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    FilterValuesComponent,
    CommonValuesComponent,
    CategoriesGridHeaderComponent,
    CategoriesGridDetailComponent,
    SeriesGridHeaderComponent,
    SeriesGridDetailComponent,
    SourcesGridHeaderComponent,
    SourcesGridDetailComponent,
    TagsGridDetailComponent,
    TagsGridHeaderComponent,
    NameValueGridHeaderComponent,
    NameValueGridDetailComponent,
    AggregationMethodPipe,
    FilterValuePipe,
    FilterVariablePipe,
    FrequencyPipe,
    OutputTypePipe,
    SearchTypePipe,
    SortOrderPipe,
    TagGroupIdPipe,
    UnitsPipe,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FredapiModule
  ],
  exports: [
    FooterComponent,
    FilterValuesComponent,
    CommonValuesComponent,
    CategoriesGridHeaderComponent,
    CategoriesGridDetailComponent,
    SeriesGridHeaderComponent,
    SeriesGridDetailComponent,
    SourcesGridHeaderComponent,
    SourcesGridDetailComponent,
    TagsGridDetailComponent,
    TagsGridHeaderComponent,
    NameValueGridHeaderComponent,
    NameValueGridDetailComponent,
    AggregationMethodPipe,
    FilterValuePipe,
    FilterVariablePipe,
    FrequencyPipe,
    OutputTypePipe,
    SearchTypePipe,
    SortOrderPipe,
    TagGroupIdPipe,
    UnitsPipe,
    OrderByPipe
  ],
  providers: [
  ]
})
export class FeaturesCommonModule { }
