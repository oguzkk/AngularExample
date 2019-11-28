import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from '../pages/page1/main.component'
import { HeaderComponent } from '../components/header/header.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [MainComponent],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
