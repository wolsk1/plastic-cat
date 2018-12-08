import { Component } from '@angular/core';
import { NavConfig } from '../../models/navigation.models';

@Component({
  selector: 'pc-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
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
    },
    {
      displayName: 'Klienti',
      icon: 'group',
      linkParams: ['/clients']
    },
    {
      displayName: 'Pamatlidzekli',
      icon: 'work',
      linkParams: ['/']
    },
    {
      displayName: 'Gramatvediba',
      icon: 'tab',
      linkParams: ['/']
    }
  ]
}
