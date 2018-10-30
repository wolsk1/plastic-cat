import { Component, Input } from '@angular/core';

@Component({
  selector: 'ivato-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: [ './board-item.component.css' ]
})
export class BoardItemComponent  {
  @Input()
  public item: any;
}
