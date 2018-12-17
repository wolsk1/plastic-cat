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
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatSlideToggleModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { CLIENTS_ROUTES } from './clients.routing';
import {
  ClientsOverviewComponent,
  ClientDetailsComponent,
  ClientEditComponent,
  ClientCreateComponent
} from './pages';
import { ClientOverviewActionsComponent } from './fragments';
import { ClientService } from './services';

const CLIENT_PAGES = [
  ClientsOverviewComponent,
  ClientDetailsComponent,
  ClientEditComponent,
  ClientCreateComponent
];

const CLIENT_FRAGMENTS = [
  ClientOverviewActionsComponent
];

const CLIENT_SERVICES = [
  ClientService
];

const MAT_MODULES = [
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,
  ScrollingModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatSlideToggleModule
];

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    MAT_MODULES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CLIENTS_ROUTES
  ],
  declarations: [CLIENT_FRAGMENTS, CLIENT_PAGES],
  providers: [CLIENT_SERVICES]
})
export class ClientsModule { }
