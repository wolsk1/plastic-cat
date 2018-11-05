import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardItem, Order, OrderStatus } from '../../models/board-item.models';
import { Router } from '@angular/router';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'ivato-item-lists',
  templateUrl: './item-lists.component.html',
  styleUrls: ['./item-lists.component.css'],
})
export class ItemListsComponent implements OnInit {
  constructor(
    private router: Router
  ) {
    console.log(this.router.config)
  }

  public todo: Order[] = [];

  public inProgress: Order[] = [];

  public done: Order[] = [];

  public ngOnInit(): void {
    this.todo = [
      { id: '545345435', title: 'Plastic barbie', status: OrderStatus.toDo },
      { id: '133445577', title: 'Skull head', status: OrderStatus.toDo },
      { id: '9768567657', title: 'Bottle', status: OrderStatus.toDo },
      { id: '6453453454', title: 'Case', status: OrderStatus.toDo }
    ];
  }

  drop(event: CdkDragDrop<BoardItem[]>) {
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