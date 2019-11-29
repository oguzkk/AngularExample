import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class HttpService {
  private headers: HttpHeaders;
  private accessPointUrl: string;

  set methodName(method: string) {
    this.accessPointUrl = 'http://localhost:49578/api/Default/' + method;
  }

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public get() {
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }
} 
