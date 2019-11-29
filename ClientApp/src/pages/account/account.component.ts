import { Component } from '@angular/core';
import { BasePage } from '../base/base.component';
import { HttpService } from '../../services/http.service';
import { IResponseItem } from '../../models/models';

@Component({
  selector: 'page-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountPage extends BasePage {
  reponseItems: IResponseItem[];
  constructor(private httpService: HttpService) {
    super(httpService);
  }
  ngOnInit() {
    if(this.transactionName) {
      this.callTransaaction().then((response) => response.subscribe(response => { this.reponseItems = response as IResponseItem[] }));
    }
  }
}
