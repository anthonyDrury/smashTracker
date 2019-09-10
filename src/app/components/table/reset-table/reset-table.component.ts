import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ResetOweingModalComponent } from "../reset-oweing-modal/reset-oweing-modal.component";

@Component({
  selector: "app-reset-table",
  templateUrl: "./reset-table.component.html",
  styleUrls: ["./reset-table.component.scss"]
})
export class ResetTableComponent {
  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(ResetOweingModalComponent, {
      width: "250px"
    });
  }
}
