import { NgModule } from "@angular/core";
import { FormModule } from "../form/form.module";
import { TableComponent } from "./table.component";

@NgModule({
  declarations: [TableComponent],
  imports: [FormModule]
})
export class TableModule {}
