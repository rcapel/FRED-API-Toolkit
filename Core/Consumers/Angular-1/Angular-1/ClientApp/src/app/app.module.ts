import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './appRouting.module';

// feature modules
import { CategoryModule } from '..//features/categories/category.module';
import { SourcesModule } from '..//features/sources/sources.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { FeaturesModule } from '../features/features.module';

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
    SourcesModule,
    AppRoutingModule,
    FeaturesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
