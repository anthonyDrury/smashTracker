import { NgModule } from "@angular/core";
import { FormModule } from "../form/form.module";
import { AdminIndexComponent } from "./admin-index/admin-index.component";
import { EditOweingModalComponent } from "./edit-oweing-modal/edit-oweing-modal.component";
import { EditTableComponent } from "./edit-table/edit-table.component";
import { ResetOweingModalComponent } from "./reset-oweing-modal/reset-oweing-modal.component";
import { ResetTableComponent } from "./reset-table/reset-table.component";

const declarations: Array<any> = [
  AdminIndexComponent,
  EditTableComponent,
  EditOweingModalComponent,
  ResetTableComponent,
  ResetOweingModalComponent
];
@NgModule({
  declarations,
  imports: [FormModule],
  entryComponents: [EditOweingModalComponent, ResetOweingModalComponent]
})
export class AdminModule {}
