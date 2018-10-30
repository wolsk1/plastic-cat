import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  MatGridListModule
} from '@angular/material';

import { BoardItemComponent } from './fragments';
import { PlanningBoardComponent } from './planning-board.component';
import { routing } from './planning-board.routing';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    routing
  ],
  declarations: [
    PlanningBoardComponent,
    BoardItemComponent
  ],
  exports: [ ]
})
export class PlanningBoardModule { }
