import { CustomerPage } from '../pages/customer/customer.component';
import { AccountPage } from '../pages/account/account.component';

export default class GeneralHelper {
  static Pages = { accountPage: AccountPage, customerPage: CustomerPage };
  static findPage(pageName: string) {
    return this.Pages[pageName];
  }
}

