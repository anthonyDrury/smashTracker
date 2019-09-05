import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { smashPlayer } from "../../models/smash.model";

@Component({
  selector: "app-smash-player-win",
  templateUrl: "./smash-player-win.component.html",
  styleUrls: ["./smash-player-win.component.scss"]
})
export class SmashPlayerWinComponent {
  @Input()
  public smashPlayers?: Array<smashPlayer>;

  public selectedPlayer?: smashPlayer;

  @Output()
  public playerWon: EventEmitter<smashPlayer> = new EventEmitter<smashPlayer>();

  public onDisburse(): void {
    if (this.selectedPlayer !== undefined) {
      this.playerWon.emit(this.selectedPlayer);
    }
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
