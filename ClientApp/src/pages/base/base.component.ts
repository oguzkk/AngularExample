import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'page-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less']
})
export class BasePage implements OnInit {
  public transactionName: string;
  private response: any;
  constructor(private baseHttpService: HttpService) {
  }

  public async callTransaaction() {
    this.baseHttpService.methodName = this.transactionName;
    return await this.baseHttpService.get();
  }

  ngOnInit() {

  }
}
