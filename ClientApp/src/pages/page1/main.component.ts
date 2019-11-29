import { Component } from '@angular/core';
import { INavigationItem } from '../../models/models';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  navigationItems = undefined;
  constructor(private menuService: MenuService) {
      this.menuService.get()
        .subscribe(
        response => this.navigationItems = response);
  }

  onNavigationItemClick(navigationItem: INavigationItem ) {
    console.log(navigationItem);
  }
}
