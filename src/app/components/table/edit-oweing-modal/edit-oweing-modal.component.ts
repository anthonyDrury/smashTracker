import {
  Component,
  ElementRef,
  Inject,
  QueryList,
  ViewChildren
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatInput } from "@angular/material/input";
import { Store } from "@ngxs/store";
import { EditSmashPlayerOwes } from "../../../stateManagement/actions/smash.action";
import {
  oweObj,
  smashPlayer
} from "../../../stateManagement/models/smash.model";
import { dialogData } from "../edit-table/edit-table.component";

@Component({
  selector: "app-edit-oweing-modal",
  templateUrl: "./edit-oweing-modal.component.html",
  styleUrls: ["./edit-oweing-modal.component.scss"]
})
export class EditOweingModalComponent {
  @ViewChildren("oweAmount") oweList: QueryList<ElementRef<MatInput>>;

  public smashPlayer: smashPlayer;

  public loading: boolean = true;

  constructor(
    private readonly dialogRef: MatDialogRef<EditOweingModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: dialogData,
    private readonly store: Store
  ) {
    this.smashPlayer = data.smashPlayer;
    this.loading = false;
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    this.loading = true;
    let newOweArr: Array<oweObj> = [];
    this.oweList.forEach((input: ElementRef<MatInput>, index: number) => {
      newOweArr = [
        ...newOweArr,
        {
          name: this.smashPlayer.owes[index].name,
          amount: Number(input.nativeElement.value)
        }
      ];
    });
    this.smashPlayer.owes = newOweArr;
    this.store
      .dispatch(new EditSmashPlayerOwes(this.smashPlayer))
      .subscribe(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
