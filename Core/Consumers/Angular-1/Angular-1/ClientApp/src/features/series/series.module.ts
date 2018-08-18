import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

import { SeriesComponent } from './series/series.component';
import { SeriesResolver } from '../series/services/series.resolver';

@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'series/:id', component: SeriesComponent, resolve: { series: SeriesResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    SeriesResolver
  ]
})
export class SeriesModule { }
