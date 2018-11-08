import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const routing: ModuleWithProviders = RouterModule.forRoot([
  {
      path: '',
      component: HomeComponent
  }
]);
