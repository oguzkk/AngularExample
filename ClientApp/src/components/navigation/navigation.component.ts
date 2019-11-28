import { Component, Input, Output, EventEmitter } from '@angular/core';
import { INavigationItem } from '../../models/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})

export class NavigationComponent {
  @Input('navigationItems') navigationItems: INavigationItem[];
  @Output() onNavigationItemClick: EventEmitter<INavigationItem> = new EventEmitter<INavigationItem>();


  navigationItemClick(navigationItem: INavigationItem) {
    // TODO: stop bubble
    if (navigationItem.children && navigationItem.children.length > 0) {
      navigationItem.showChildren = !navigationItem.showChildren;
    }
    else if (navigationItem.page) {
      this.onNavigationItemClick.emit(navigationItem);
    }
  }
  constructor() {
  }
}
