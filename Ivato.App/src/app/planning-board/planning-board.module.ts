import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlanningBoardComponent } from './planning-board.component';
import { routing } from './planning-board.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    PlanningBoardComponent
  ],
  exports: [
    PlanningBoardComponent
  ]
})
export class PlanningBoardModule { }
