import { BoardItemComponent } from "./board-item/board-item.component";
import { ItemListsComponent } from "./item-lists/item-lists.components";
import { OrderFormComponent } from "./order-form/order-form.component";
import { OrderOverviewActionsComponent } from "./actions/order-overview-actions.component";

export * from './board-item/board-item.component';
export * from './item-lists/item-lists.components';
export * from './order-form/order-form.component';
export * from './actions/order-overview-actions.component';

export const PLANNING_FRAGMENTS = [
  BoardItemComponent,
  ItemListsComponent,
  OrderFormComponent,
  OrderOverviewActionsComponent
];
