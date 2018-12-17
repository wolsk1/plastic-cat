import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule
} from "@angular/material";

import { NavigationComponent } from "./fragments";
import { SettingsService } from "./services";

const CORE_SERVICES = [
  SettingsService
];

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
  declarations: [NavigationComponent],
  providers: [CORE_SERVICES],
  exports: [NavigationComponent]
})
export class CoreModule { }
