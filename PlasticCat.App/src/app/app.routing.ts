import { ModuleWithProviders } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot([
    {
        path: 'planning-board', 
        loadChildren: './planning-board/planning-board.module#PlanningBoardModule'
    },
    {
        path: 'clients', 
        loadChildren: './clients/clients.module#ClientsModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
], { preloadingStrategy: PreloadAllModules });
