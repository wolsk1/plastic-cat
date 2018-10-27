import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanningBoardComponent } from './planning-board.component';

export const routing: ModuleWithProviders = RouterModule.forRoot([
  {
      path: 'planning-board',
      component: PlanningBoardComponent
  }
]);
