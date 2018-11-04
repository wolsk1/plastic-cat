import { Component } from '@angular/core';

@Component({
  selector: 'ivato-nav',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.css' ]
})
export class NavigationComponent  {
  public isMiniSidebar: boolean = true;
}
