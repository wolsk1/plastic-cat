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
  MatSlideToggleModule,
  MatDialogModule
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
import { ClientNamePipe } from './pipes';

const CLIENT_PAGES = [
  ClientsOverviewComponent,
  ClientDetailsComponent,
  ClientEditComponent,
  ClientCreateComponent
];

const CLIENT_FRAGMENTS = [
  ClientOverviewActionsComponent
];

const CLIENT_PIPES = [
  ClientNamePipe
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
  MatSlideToggleModule,
  MatDialogModule
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MAT_MODULES,
    CLIENTS_ROUTES
  ],
  declarations: [CLIENT_FRAGMENTS, CLIENT_PAGES, CLIENT_PIPES],
  providers: [],
  entryComponents: [ClientCreateComponent]
})
export class ClientsModule { }
