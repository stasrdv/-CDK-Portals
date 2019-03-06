import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "contact", pathMatch: "full", component: ContactComponent },
  { path: "about", pathMatch: "full", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
