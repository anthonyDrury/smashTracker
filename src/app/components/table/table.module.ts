import { NgModule } from "@angular/core";
import { FormModule } from "../form/form.module";
import { EditOweingModalComponent } from "./edit-oweing-modal/edit-oweing-modal.component";
import { EditTableComponent } from "./edit-table/edit-table.component";
import { TableComponent } from "./table.component";

@NgModule({
  declarations: [TableComponent, EditTableComponent, EditOweingModalComponent],
  imports: [FormModule],
  entryComponents: [EditOweingModalComponent]
})
export class TableModule {}
