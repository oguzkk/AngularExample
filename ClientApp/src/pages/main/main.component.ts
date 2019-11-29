import { Component } from '@angular/core';
import { INavigationItem } from '../../models/models';
import { HttpService } from '../../services/http.service';
import { BasePage } from '../base/base.component';
import Constants from '../../helpers/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent extends BasePage{
  navigationItems: INavigationItem[];
  activePage: INavigationItem;
  constructor(private menuService: HttpService) {
    super(menuService);
    this.transactionName = Constants.TransactionNameConstants.MenuTransaction;
    this.callTransaaction().then((response) => response.subscribe(response => { this.navigationItems = response as INavigationItem[] }));
  }

  onNavigationItemClick(navigationItem: INavigationItem) {
    this.activePage = navigationItem;
  }
}
