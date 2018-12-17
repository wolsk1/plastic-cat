import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routing: ModuleWithProviders = RouterModule.forRoot([
    {
        path: 'planning-board', loadChildren: './planning-board/planning-board.module#PlanningBoardModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
]);
