import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

import { TagsComponent } from './tags/tags.component';
import { RelatedTagsComponent } from './relatedTags/relatedTags.component';

import { TagsResolver } from './services/tags.resolver';
import { RelatedTagsResolver } from './services/relatedTags.resolver';

@NgModule({
  declarations: [
    TagsComponent,
    RelatedTagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'tags', component: TagsComponent, resolve: { tags: TagsResolver } },
      { path: 'relatedTags/:id', component: RelatedTagsComponent, resolve: { relatedTags: RelatedTagsResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    TagsResolver,
    RelatedTagsResolver
  ]
})
export class TagsModule { }
