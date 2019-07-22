import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { APP_MODULES } from './app.modules';
import { APP_ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { VENDOR_MODULES } from './vendor.modules';

@NgModule({
  imports: [
    BrowserModule,
    VENDOR_MODULES,
    FormsModule,
    APP_ROUTES,
    APP_MODULES
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
