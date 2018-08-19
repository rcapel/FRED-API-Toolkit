import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

import { SourcesComponent } from './sources/sources.component';
import { SourcesResolver } from '../sources/services/sources.resolver';

@NgModule({
  declarations: [
    SourcesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'sources', component: SourcesComponent, resolve: { sources: SourcesResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    SourcesResolver
  ]
})
export class SourcesModule { }
