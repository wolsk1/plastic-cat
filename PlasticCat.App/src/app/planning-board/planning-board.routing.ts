import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  OrderDetailsComponent,
  CreateOrderComponent,
  PlanningBoardComponent
} from './pages';

export const routing: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'planning-board',
    children: [
      {
        path: '',
        component: PlanningBoardComponent
      },
      {
        path: 'order',
        children: [
          {
            path: ':orderId',
            component: CreateOrderComponent
          },
          {
            path: 'create',
            component: CreateOrderComponent
          }
        ]
      }
    ]
  }
]);
