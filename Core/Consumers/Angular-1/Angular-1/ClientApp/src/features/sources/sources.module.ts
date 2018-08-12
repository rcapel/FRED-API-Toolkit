import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FredapiModule } from '../../fredapi/fredapi.module';

import { SourcesOrderByPipe } from './services/sourcesOrderBy.pipe';
import { SortOrderPipe } from '../shared/sortOrder.pipe';

import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [
    SourcesComponent,
    SourcesOrderByPipe,
    SortOrderPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'sources', component: SourcesComponent }
    ]),
    FredapiModule
  ],
  providers: [
  ]
})
export class SourcesModule { }
