import { Component } from '@angular/core';
import { NavConfig } from '../../models/navigation.models';

@Component({
  selector: 'ivato-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public isMiniSidebar: boolean = true;
  public navigationConfigs: NavConfig[] = [
    {
      displayName: 'Sākums',
      icon: 'home',
      linkParams: ['/']
    },
    {
      displayName: 'Pasūtījumi',
      icon: 'assignment',
      linkParams: ['/planning-board']
    }
  ]
}
