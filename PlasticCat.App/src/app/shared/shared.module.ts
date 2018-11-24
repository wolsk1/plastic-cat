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
import { HttpService } from './services/http.service';
import { SHARED_SERVICES } from './services';


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
  providers:[
    SHARED_SERVICES
  ],
  exports: [
  ]
})
export class SharedModule { }
