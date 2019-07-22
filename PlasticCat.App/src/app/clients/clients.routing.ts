import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ClientsOverviewComponent,
  ClientDetailsComponent,
  ClientEditComponent,
  ClientCreateComponent
} from './pages';

export const CLIENTS_ROUTES: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: ClientsOverviewComponent
  },
  {
    path: 'details/:orderId',
    component: ClientDetailsComponent
  },
  {
    path: 'edit/:orderId',
    component: ClientEditComponent
  }
]);
