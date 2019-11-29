import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, Type, ComponentRef } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';
import GeneralHelper from '../../helpers/generalHelper';
import { INavigationItem } from '../../models/models';

@Component({
  selector: 'page-caller',
  templateUrl: './pageCaller.component.html',
  styleUrls: ['./pageCaller.component.less']
})
export class PageCaller {
  title = 'app works!';

  @ViewChild('parent', { read: ViewContainerRef, static: false })
  parent: ViewContainerRef;
  loadingRef;
  activePageRef;
  @Input()
  set page(value: INavigationItem) {
    if (value && value.page) {
      const activePage = GeneralHelper.findPage(value.page);
      if (activePage) {
        let childComponent = this.componentFactoryResolver.resolveComponentFactory(activePage);
        setTimeout(() => {
          this.destroyComponents();
          this.activePageRef = this.parent.createComponent(childComponent);
          this.activePageRef.instance.transactionName = value.transaction;
        }, 1000);
      }
      else {
        this.destroyComponents();
        this.showLoading();
      }
    }
    else {
      this.destroyComponents();
    }
  }
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  showLoading() {
    const loadingComponent = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
    setTimeout(() => {
      this.loadingRef = this.parent.createComponent(loadingComponent);
    }, 1000);
  }

  destroyComponents() {
    if (this.activePageRef) {
      this.activePageRef.destroy();
    }
    if (this.loadingRef) {
      this.loadingRef.destroy();
    }
  }
}
