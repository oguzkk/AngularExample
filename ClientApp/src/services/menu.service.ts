import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INavigationItem } from '../models/models';
@Injectable()
export class MenuService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:49578/api/NavigationMenu/GetNavigationItems';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public get() {
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }
} 
