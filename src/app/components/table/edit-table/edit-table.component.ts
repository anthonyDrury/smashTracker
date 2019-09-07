import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSelectChange } from "@angular/material/select";
import { smashPlayer } from "../../../stateManagement/models/smash.model";
import { EditOweingModalComponent } from "../edit-oweing-modal/edit-oweing-modal.component";

export interface dialogData {
  smashPlayer: smashPlayer;
}

@Component({
  selector: "app-edit-table",
  templateUrl: "./edit-table.component.html",
  styleUrls: ["./edit-table.component.scss"]
})
export class EditTableComponent implements OnInit {
  public selectedPlayer?: smashPlayer;

  @Input()
  public smashPlayers?: Array<smashPlayer>;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditOweingModalComponent, {
      data: { smashPlayer: this.selectedPlayer } as dialogData
    });
  }

  public playerSelected(selectChange: MatSelectChange): void {
    if (this.smashPlayers === undefined) {
      return;
    }
    this.smashPlayers.forEach((player: smashPlayer) => {
      if (player.userId === selectChange.value) {
        this.selectedPlayer = player;
      }
    });
  }
}
