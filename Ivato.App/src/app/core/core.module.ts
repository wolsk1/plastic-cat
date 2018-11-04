import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';

import { NavigationComponent } from './fragments';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
