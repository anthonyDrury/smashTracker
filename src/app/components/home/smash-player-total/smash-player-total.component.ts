import { Component, Input } from "@angular/core";
import { smashPlayer } from "../../../stateManagement/models/smash.model";

@Component({
  selector: "app-smash-player-total",
  templateUrl: "./smash-player-total.component.html",
  styleUrls: ["./smash-player-total.component.scss"]
})
export class SmashPlayerTotalComponent {
  private _smashPlayers?: Array<smashPlayer>;

  @Input()
  public set smashPlayers(players: Array<smashPlayer>) {
    this._smashPlayers = players;

    this.smashTotal = this._smashPlayers
      .map((player: smashPlayer) =>
        Array.from(player.owes)
          .map((owes: [string, number]) => owes[1])
          .reduce((x: number, y: number) => x + y)
      )
      .reduce((x: number, y: number) => x + y);
  }

  public get smashPlayers(): Array<smashPlayer> {
    return this._smashPlayers;
  }

  public smashTotal: number = 0;
}
