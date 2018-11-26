import { BoardItemComponent } from "./board-item/board-item.component";
import { ItemListsComponent } from "./item-lists/item-lists.components";
import { OrderFormComponent } from "./order-form/order-form.component";

export * from './board-item/board-item.component';
export * from './item-lists/item-lists.components';
export * from './order-form/order-form.component';

export const PLANNING_FRAGMENTS = [
  BoardItemComponent,
  ItemListsComponent,
  OrderFormComponent
];
