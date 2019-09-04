import { CdkColumnDef } from "@angular/cdk/table";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContentHeaderComponent } from "./content-header/content-header.component";
import { FormModule } from "./form/form.module";
import { HomeModule } from "./home/home.module";
import { TableModule } from "./table/table.module";

@NgModule({
  declarations: [AppComponent, ContentHeaderComponent],
  imports: [
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
