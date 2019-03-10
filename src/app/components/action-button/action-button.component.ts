import {
  Component,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  AfterViewInit,
  OnDestroy,
  ViewChild
} from "@angular/core";
import { CdkPortal, DomPortalHost } from "@angular/cdk/portal";

@Component({
  selector: "action-button",
  template: `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `
})
export class ActionButtonComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal)
  private portal: CdkPortal;
  private host: DomPortalHost;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  ngAfterViewInit() {
    this.host = new DomPortalHost(
      document.querySelector("#action"),
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );
    this.host.attach(this.portal);
  }

  ngOnDestroy() {
    this.host.detach();
  }
}
