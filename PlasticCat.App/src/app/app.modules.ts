import { PlanningBoardModule } from './planning-board/planning-board.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core';
import { ClientsModule } from './clients/clients.module';

export const APP_MODULES = [
  SharedModule,
  CoreModule,
  PlanningBoardModule,
  ClientsModule
];