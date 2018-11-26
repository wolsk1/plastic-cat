import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsOverviewComponent, ClientDetailsComponent, ClientEditComponent } from './pages';

export const CLIENTS_ROUTES: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'clients',
    children: [
      {
        path: '',
        component: ClientsOverviewComponent
      },
      {
        path: 'details/:orderId',
        component: ClientDetailsComponent,
        children: [
          {
            path: 'edit',
            component: ClientEditComponent
          }
        ]
      }
    ]
  }
]);
