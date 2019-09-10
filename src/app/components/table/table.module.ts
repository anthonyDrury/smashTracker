import { NgModule } from "@angular/core";
import { FormModule } from "../form/form.module";
import { EditOweingModalComponent } from "./edit-oweing-modal/edit-oweing-modal.component";
import { EditTableComponent } from "./edit-table/edit-table.component";
import { ResetOweingModalComponent } from "./reset-oweing-modal/reset-oweing-modal.component";
import { ResetTableComponent } from "./reset-table/reset-table.component";
import { TableComponent } from "./table.component";

@NgModule({
  declarations: [
    TableComponent,
    EditTableComponent,
    EditOweingModalComponent,
    ResetTableComponent,
    ResetOweingModalComponent
  ],
  imports: [FormModule],
  entryComponents: [EditOweingModalComponent, ResetOweingModalComponent]
})
export class TableModule {}
