import { Component } from '@angular/core';
import { INavigationItem } from '../../models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  onNavigationItemClick(navigationItem: INavigationItem ) {
    console.log(navigationItem);
  }
  // TODO: get menu from controller
  navigationItems = [{ title: "menu1", children: [{ title: "childMenu1", page: "testPage" }, { title: "childMenu2" }] }, { title: "menu2", children: [{ title: "childMenu3" }, { title: "childMenu4", children: [{ title: "moreChildren1" }, { title: "moreChildren2" ,page:"testPage2"}] }]}];
}
