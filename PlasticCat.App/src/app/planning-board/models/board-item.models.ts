export interface BoardItem {
  id: string;
  title: string;
}
export interface Order {
  id: string;
  title: string;
  status: OrderStatus;
}
export enum OrderStatus {
  toDo = 'todo',
  inProgress = 'inprogress',
  done = 'done'
}