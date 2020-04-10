import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { DynamicFilterComponent } from '../../dynamic-filter/dynamic-filter.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent  {
  private _counter = 1;
  searchText: string;
  filters: Object;

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  add(): void {

    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicFilterComponent);

    // add the component to the view
    const componentRef = this.container.createComponent(componentFactory);

    // pass some data to the component
    componentRef.instance.index = this._counter++;

  }

}
