import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatAutocompleteModule,
  MatButtonModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { routing } from './planning-board.routing';
import {
  BoardItemComponent,
  OrderFormComponent,
  OrderOverviewActionsComponent,
  OrderStatusesComponent
} from './fragments';
import { CreateOrderComponent, OrderDetailsComponent, PlanningBoardComponent } from './pages';
import { OrderService } from './services';

const PLANNING_FRAGMENTS = [
  BoardItemComponent,
  OrderFormComponent,
  OrderOverviewActionsComponent,
  OrderStatusesComponent
];
const PLANNING_PAGES = [
  CreateOrderComponent,
  OrderDetailsComponent,
  OrderOverviewActionsComponent,
  OrderStatusesComponent,
  PlanningBoardComponent
];
const PLANNING_SERVICES = [
  OrderService
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    ScrollingModule,
    CdkTableModule,
    CdkTreeModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatAutocompleteModule,
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
