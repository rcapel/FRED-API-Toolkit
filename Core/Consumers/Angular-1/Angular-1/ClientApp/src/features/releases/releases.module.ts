import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

//import { ReleaseComponent } from './release/release.component';
import { ReleaseDatesComponent } from './releaseDates/releaseDates.component';

//import { ReleaseResolver } from './services/release.resolver';
import { ReleaseDatesResolver } from './services/releaseDates.resolver';

@NgModule({
  declarations: [
    //ReleaseComponent,
    ReleaseDatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      //{ path: 'release/:id', component: ReleaseComponent, resolve: { release: ReleaseResolver } },
      { path: 'releaseDates/:id', component: ReleaseDatesComponent, resolve: { releaseDates: ReleaseDatesResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    //ReleaseResolver,
    ReleaseDatesResolver
  ]
})
export class ReleasesModule { }
