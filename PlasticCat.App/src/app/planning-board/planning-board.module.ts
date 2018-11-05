import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatGridListModule
} from '@angular/material';

import {
  BoardItemComponent,
  ItemListsComponent,
  OrderDetailsComponent
} from './fragments';
import { PlanningBoardComponent } from './planning-board.component';
import { routing } from './planning-board.routing';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    ScrollingModule,
    CdkTableModule,
    CdkTreeModule,
    MatGridListModule,
    routing
  ],
  declarations: [
    PlanningBoardComponent,
    BoardItemComponent,
    ItemListsComponent,
    OrderDetailsComponent
  ],
  exports: []
})
export class PlanningBoardModule { }