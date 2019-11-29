import { NgModule} from '@angular/core';
import { MainComponent } from '../pages/main/main.component'
import { HeaderComponent } from '../components/header/header.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { PageCaller } from './pageCaller/pageCaller.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { AccountPage } from './account/account.component';
import { CustomerPage } from './customer/customer.component';
import { ResponseItemComponent } from '../components/responseitem/responseitem.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavigationComponent,
    PageCaller,
    LoadingComponent,
    AccountPage,
    CustomerPage,
    ResponseItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [MainComponent],
  entryComponents: [LoadingComponent, AccountPage, CustomerPage],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
