import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminIndexComponent } from "./components/admin/admin-index/admin-index.component";
import { HomeComponent } from "./components/home/home.component";
import { TableComponent } from "./components/table/table.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "admin",
    component: AdminIndexComponent
  }
];

// tslint:disable-next-line: whitespace
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
