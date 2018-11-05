import { PlanningBoardModule } from './planning-board/planning-board.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core';

export const APP_MODULES = [
  SharedModule,
  CoreModule,
  PlanningBoardModule
];