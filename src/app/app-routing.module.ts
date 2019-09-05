import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { HomeComponent } from "./components/home/home.component";
import { TableComponent } from "./components/table/table.component";
import { SmashState } from "./stateManagement/state/smash.state";

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
  }
];

// tslint:disable-next-line: whitespace
@NgModule({
  imports: [RouterModule.forRoot(routes), NgxsModule.forRoot([SmashState])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
