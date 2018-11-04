import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardItem } from '../../models/board-item.models';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'ivato-item-lists',
  templateUrl: './item-lists.component.html',
  styleUrls: [ './item-lists.component.css' ],
})
export class ItemListsComponent {
  todo: BoardItem[] = [
    { id: '545345435', title: 'Plastic barbie' },
    { id: '133445577', title: 'Skull head' },
    { id: '9768567657', title: 'Bottle' },
    { id: '6453453454', title: 'Case' }
  ];

  inProgress: BoardItem[] = [
    { id: '879798784564', title: 'Skrew' }
  ];

  done: BoardItem[] = [
    { id: '6546445', title: 'Rabbit' }
  ];

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
}