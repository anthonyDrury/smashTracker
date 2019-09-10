import { CdkColumnDef } from "@angular/cdk/table";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsModule } from "@ngxs/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContentHeaderComponent } from "./components/content-header/content-header.component";
import { FormModule } from "./components/form/form.module";
import { HomeModule } from "./components/home/home.module";
import { TableModule } from "./components/table/table.module";
import { SmashState } from "./stateManagement/state/smash.state";

@NgModule({
  declarations: [AppComponent, ContentHeaderComponent, ],
  imports: [
    NgxsModule.forRoot([SmashState]),
    NgxsStoragePluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    TableModule,
    FormModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule {}
