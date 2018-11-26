import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PlanningBoardComponent } from './overview/planning-board.component';

export * from './create-order/create-order.component';
export * from './order-details/order-details.component';
export * from './overview/planning-board.component';

export const PLANNING_PAGES = [
  CreateOrderComponent,
  OrderDetailsComponent,
  PlanningBoardComponent
];