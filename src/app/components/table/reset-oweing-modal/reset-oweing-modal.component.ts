import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatInput } from "@angular/material/input";
import { Store } from "@ngxs/store";
import { ResetAllSmashPlayerOwes } from "../../../stateManagement/actions/smash.action";
import { smashPlayer } from "../../../stateManagement/models/smash.model";
import { EditOweingModalComponent } from "../edit-oweing-modal/edit-oweing-modal.component";

@Component({
  selector: "app-reset-oweing-modal",
  templateUrl: "./reset-oweing-modal.component.html",
  styleUrls: ["./reset-oweing-modal.component.scss"]
})
export class ResetOweingModalComponent {
  @ViewChildren("oweAmount") oweList: QueryList<ElementRef<MatInput>>;

  public smashPlayer: smashPlayer;

  public loading: boolean = true;

  constructor(
    private readonly dialogRef: MatDialogRef<EditOweingModalComponent>,
    private readonly store: Store
  ) {
    this.loading = false;
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    this.loading = true;

    this.store.dispatch(new ResetAllSmashPlayerOwes()).subscribe(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
