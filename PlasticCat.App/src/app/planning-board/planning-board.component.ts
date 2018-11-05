import { Component } from '@angular/core';

@Component({
  selector: 'ivato-planning-board',
  templateUrl: './planning-board.component.html',
  styleUrls: [ './planning-board.component.css' ]
})
export class PlanningBoardComponent  {
  public itemsToDo: any[] = [
    {
      id: '#123'
    },
    {
      id: '#9999'
    }
  ];
  public itemsInProgress: any[] = [
    {
      id: '#65654'
    }
  ];
  public itemsDone: any[] = [
    {
      id: '#989978987'
    }
  ];
}
