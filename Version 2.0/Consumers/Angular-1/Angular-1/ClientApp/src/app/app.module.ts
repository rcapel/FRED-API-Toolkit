import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './appRouting.module';

// feature modules
import { CategoryModule } from '..//features/categories/category.module';
import { ReleasesModule } from '../features/releases/releases.module';
import { SeriesModule } from '..//features/series/series.module';
import { SourcesModule } from '..//features/sources/sources.module';
import { TagsModule } from '..//features/tags/tags.module';
import { FeaturesCommonModule } from '../features/featuresCommon.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    CategoryModule,
    ReleasesModule,
    SeriesModule,
    SourcesModule,
    TagsModule,
    AppRoutingModule,
    FeaturesCommonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
