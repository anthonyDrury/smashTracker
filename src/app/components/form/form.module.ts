import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
const declarations: Array<any> = [];

const importExports: Array<any> = [
  MatButtonModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatRippleModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule
];

@NgModule({
  declarations,
  imports: [CommonModule, ...importExports],
  exports: [CommonModule, ...importExports]
})
export class FormModule {}
