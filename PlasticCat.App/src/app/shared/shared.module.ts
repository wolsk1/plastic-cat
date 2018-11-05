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
  ],
  exports: [
  ]
})
export class SharedModule { }
