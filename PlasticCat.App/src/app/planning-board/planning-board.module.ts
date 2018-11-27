import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatGridListModule, MatIconModule
} from '@angular/material';

import { routing } from './planning-board.routing';
import { PLANNING_FRAGMENTS } from './fragments';
import { PLANNING_PAGES } from './pages';
import { PLANNING_SERVICES } from './services';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    ScrollingModule,
    SharedModule,
    CdkTableModule,
    CdkTreeModule,
    MatGridListModule,
    MatIconModule,
    routing
  ],
  declarations: [
    PLANNING_FRAGMENTS,
    PLANNING_PAGES
  ],
  providers:[
    PLANNING_SERVICES
  ],
  exports: []
})
export class PlanningBoardModule { }
