import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

import { SourcesComponent } from './sources/sources.component';
import { SourceComponent } from './source/source.component';
import { SourceReleasesComponent } from './sourceReleases/sourceReleases.component';

import { SourcesResolver } from '../sources/services/sources.resolver';
import { SourceResolver } from '../sources/services/source.resolver';
import { SourceReleasesResolver } from '../sources/services/sourceReleases.resolver';

@NgModule({
  declarations: [
    SourcesComponent,
    SourceComponent,
    SourceReleasesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'sources', component: SourcesComponent, resolve: { sources: SourcesResolver } },
      { path: 'source/:id', component: SourceComponent, resolve: { source: SourceResolver } },
      { path: 'sourceReleases/:id', component: SourceReleasesComponent, resolve: { sourceReleases: SourceReleasesResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    SourcesResolver,
    SourceResolver,
    SourceReleasesResolver
  ]
})
export class SourcesModule { }
