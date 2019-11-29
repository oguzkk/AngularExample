import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainModule } from '../pages/page.module';
import { HttpService } from '../services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    HttpClientModule 
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
