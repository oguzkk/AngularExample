import { Component } from '@angular/core';
import { IResponseItem } from '../../models/models';
import { BasePage } from '../base/base.component';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'page-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerPage extends BasePage {
  reponseItems: IResponseItem[];
  constructor(private httpService: HttpService) {
    super(httpService);
  }
  ngOnInit() {
    if (this.transactionName) {
      this.callTransaaction().then((response) => response.subscribe(response => { this.reponseItems = response as IResponseItem[] }));
    }
  }
}
