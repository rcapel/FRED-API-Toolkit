/// <reference path="shared/pipes/filtervalue/filtervalue.pipe.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './shared/footer/footer.component';
import { FilterValuesComponent } from './shared/filterValues/filterValues.component';
import { CommonValuesComponent } from './shared/commonValues/commonValues.component';
import { CategoriesGridHeaderComponent } from './shared/grids/categoriesGrid/categoriesGridHeader.component';
import { CategoriesGridDetailComponent } from './shared/grids/categoriesGrid/categoriesGridDetail.component';
import { ReleaseDatesGridHeaderComponent } from './shared/grids/releaseDatesGrid/releaseDatesGridHeader.component';
import { ReleaseDatesGridDetailComponent } from './shared/grids/releaseDatesGrid/releaseDatesGridDetail.component';
import { SeriesGridHeaderComponent } from './shared/grids/seriesGrid/seriesGridHeader.component';
import { SeriesGridDetailComponent } from './shared/grids/seriesGrid/seriesGridDetail.component';
import { SourcesGridHeaderComponent } from './shared/grids/sourcesGrid/sourcesGridHeader.component';
import { SourcesGridDetailComponent } from './shared/grids/sourcesGrid/sourcesGridDetail.component';
import { TagsGridHeaderComponent } from './shared/grids/tagsGrid/tagsGridHeader.component';
import { TagsGridDetailComponent } from './shared/grids/tagsGrid/tagsGridDetail.component';
import { NameValueGridHeaderComponent } from './shared/grids/nameValueGrid/nameValueGridHeader.component';
import { NameValueGridDetailComponent } from './shared/grids/nameValueGrid/nameValueGridDetail.component';
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

import { FormBuildAndValidationService } from '../shared/formBuildAndValidation/formBuildAndValidation.service';
import { RouteToFormBindingService } from '../shared/routeToFormBinding/routeToFormBinding.service';

@NgModule({
  declarations: [
    FooterComponent,
    FilterValuesComponent,
    CommonValuesComponent,
    CategoriesGridHeaderComponent,
    CategoriesGridDetailComponent,
    ReleaseDatesGridHeaderComponent,
    ReleaseDatesGridDetailComponent,
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
    ReactiveFormsModule,
    FredapiModule
  ],
  exports: [
    FooterComponent,
    FilterValuesComponent,
    CommonValuesComponent,
    CategoriesGridHeaderComponent,
    CategoriesGridDetailComponent,
    ReleaseDatesGridHeaderComponent,
    ReleaseDatesGridDetailComponent,
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
    FormBuildAndValidationService,
    RouteToFormBindingService
  ]
})
export class FeaturesCommonModule { }
