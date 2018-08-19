import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

//import { TagsComponent } from './tags/tags.component';

//import { TagsResolver } from './services/tags.resolver';

@NgModule({
  declarations: [
    //TagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      //{ path: 'tags/:id', component: TagsComponent, resolve: { tags: TagsResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    //TagsResolver
  ]
})
export class TagsModule { }
