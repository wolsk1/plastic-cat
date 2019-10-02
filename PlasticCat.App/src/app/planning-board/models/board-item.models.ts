export interface BoardItem {
  id: string;
  title: string;
}

export interface Order {
  id?: string;
  subject: string;
  description: string;
  status: OrderStatus;
  clientId: string;
}

export enum OrderStatus {
  toDo,
  inProgress,
  blocked,
  done
}