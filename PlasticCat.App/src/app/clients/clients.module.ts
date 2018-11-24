import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatGridListModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { CLIENTS_ROUTES } from './clients.routing';
import { CLIENT_PAGES } from './pages';

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
    CLIENTS_ROUTES
  ],
  declarations: [
    CLIENT_PAGES
  ],
  providers:[
  ],
  exports: []
})
export class ClientsModule { }
