import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeaderComponent } from "./components/header/header.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ActionButtonComponent } from "./components/action-button/action-button.component";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    ActionButtonComponent
  ],
  entryComponents: [ActionButtonComponent], //this component is not going to be declared at template using tag,it going to be dynamically
  imports: [BrowserModule, AppRoutingModule, PortalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
