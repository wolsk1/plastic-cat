import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanningBoardComponent } from './planning-board.component';
import { OrderDetailsComponent } from './fragments';

export const routing: ModuleWithProviders = RouterModule.forRoot([
  {
      path: 'planning-board',
      children: [
        {
          path: '',
          component: PlanningBoardComponent
        },
        {
          path: 'details/:orderId',
          component: OrderDetailsComponent
        }
      ]
  }
]);
