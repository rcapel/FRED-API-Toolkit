import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeaturesCommonModule } from '../featuresCommon.module';

import { TagsComponent } from './tags/tags.component';
import { RelatedTagsComponent } from './relatedTags/relatedTags.component';
import { TagsSeriesComponent } from './tagsSeries/tagsSeries.component';

import { TagsResolver } from './services/tags.resolver';
import { RelatedTagsResolver } from './services/relatedTags.resolver';
import { TagsSeriesResolver } from './services/tagsSeries.resolver';

@NgModule({
  declarations: [
    TagsComponent,
    RelatedTagsComponent,
    TagsSeriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'tags', component: TagsComponent, resolve: { tags: TagsResolver } },
      { path: 'relatedTags/:tag_names', component: RelatedTagsComponent, resolve: { relatedTags: RelatedTagsResolver } },
      { path: 'tagsSeries/:tag_names', component: TagsSeriesComponent, resolve: { tagsSeries: TagsSeriesResolver } }
    ]),
    FeaturesCommonModule
  ],
  providers: [
    TagsResolver,
    RelatedTagsResolver,
    TagsSeriesResolver
  ]
})
export class TagsModule { }
