import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardItem, Order, OrderStatus } from '../../models/board-item.models';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pc-order-statuses',
  templateUrl: './order-statuses.component.html',
  styleUrls: ['./order-statuses.component.scss']
})
export class OrderStatusesComponent implements OnInit {
  constructor(
    private router: Router,
    private orderService: OrderService
  ) {
  }

  public readonly subscriptions = new Subscription();
  public todo: Order[] = [];
  public inProgress: Order[] = [];
  public done: Order[] = [];

  public ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      orders.forEach(order => {
        switch (order.status) {
          case OrderStatus.toDo:
            this.todo.push(order);
            break;
          case OrderStatus.inProgress:
          case OrderStatus.blocked:
            this.todo.push(order);
            break;
          case OrderStatus.done:
            this.todo.push(order);
            break;
        }
      });
    });
  }

  public drop(event: CdkDragDrop<BoardItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      return;
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);

  }

  public openDetails(item: BoardItem): void {
    this.router.navigate(['details', item.id]);
  }
}