import { PlanningBoardModule } from './planning-board/planning-board.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core';
import { HomeModule } from './home';

export const APP_MODULES = [
  SharedModule,
  CoreModule,
  PlanningBoardModule,
  HomeModule
];