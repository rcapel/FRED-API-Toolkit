import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

import { ReleaseComponent } from './release/release.component';
import { ReleaseDatesComponent } from './releaseDates/releaseDates.component';
import { ReleasesComponent } from './releases/releases.component';
import { ReleasesDatesComponent } from './releasesDates/releasesDates.component';
import { ReleaseSeriesComponent } from './releaseSeries/releaseSeries.component';
import { ReleaseSourcesComponent } from './releaseSources/releaseSources.component';
import { ReleaseTagsComponent } from './releaseTags/releaseTags.component';
import { ReleaseRelatedTagsComponent } from './releaseRelatedTags/releaseRelatedTags.component';

import { ReleaseResolver } from './services/release.resolver';
import { ReleaseDatesResolver } from './services/releaseDates.resolver';
import { ReleasesResolver } from './services/releases.resolver';
import { ReleasesDatesResolver } from './services/releasesDates.resolver';
import { ReleaseSeriesResolver } from './services/releaseSeries.resolver';
import { ReleaseSourcesResolver } from './services/releaseSources.resolver';
import { ReleaseTagsResolver } from './services/releaseTags.resolver';
import { ReleaseRelatedTagsResolver } from './services/releaseRelatedTags.resolver';

@NgModule({
  declarations: [
    ReleaseComponent,
    ReleaseDatesComponent,
    ReleasesComponent,
    ReleasesDatesComponent,
    ReleaseSeriesComponent,
    ReleaseSourcesComponent,
    ReleaseTagsComponent,
    ReleaseRelatedTagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'releases', component: ReleasesComponent, resolve: { releases: ReleasesResolver } },
      { path: 'releasesDates', component: ReleasesDatesComponent, resolve: { releasesDates: ReleasesDatesResolver } },
      { path: 'release/:id', component: ReleaseComponent, resolve: { release: ReleaseResolver } },
      { path: 'releaseDates/:id', component: ReleaseDatesComponent, resolve: { releaseDates: ReleaseDatesResolver } },
      { path: 'releaseSeries/:id', component: ReleaseSeriesComponent, resolve: { releaseSeries: ReleaseSeriesResolver } },
      { path: 'releaseSources/:id', component: ReleaseSourcesComponent, resolve: { releaseSources: ReleaseSourcesResolver } },
      { path: 'releaseTags/:id', component: ReleaseTagsComponent, resolve: { releaseTags: ReleaseTagsResolver } },
      { path: 'releaseRelatedTags/:id/:tag_names', component: ReleaseRelatedTagsComponent, resolve: { releaseRelatedTags: ReleaseRelatedTagsResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    ReleaseResolver,
    ReleaseDatesResolver,
    ReleasesResolver,
    ReleasesDatesResolver,
    ReleaseSeriesResolver,
    ReleaseSourcesResolver,
    ReleaseTagsResolver,
    ReleaseRelatedTagsResolver
  ]
})
export class ReleasesModule { }
