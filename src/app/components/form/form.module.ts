import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

const declarations: Array<any> = [];
const importExports: Array<any> = [
  MatButtonModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatTableModule
];

@NgModule({
  declarations,
  imports: [CommonModule, ...importExports],
  exports: [CommonModule, ...importExports]
})
export class FormModule {}
