import { Component, Input } from "@angular/core";
import { getTotalOwed, getTotalOwes } from "../../../helpers/smash.helper";
import { smashPlayer } from "../../../stateManagement/models/smash.model";

@Component({
  selector: "app-smash-player-biggest",
  templateUrl: "./smash-player-biggest.component.html",
  styleUrls: ["./smash-player-biggest.component.scss"]
})
export class SmashPlayerBiggestComponent {
  private _smashPlayers?: Array<smashPlayer>;

  @Input()
  public set smashPlayers(players: Array<smashPlayer>) {
    this._smashPlayers = players;

    this._smashPlayers.forEach((player: smashPlayer) => {
      if (getTotalOwes(player) > this.biggestLoserValue) {
        this.biggestLoserValue = getTotalOwes(player);
        this.biggestLoser = player;
      }
      if (getTotalOwed(player, this._smashPlayers) > this.biggestWinnerValue) {
        this.biggestWinnerValue = getTotalOwed(player, this._smashPlayers);
        this.biggestWinner = player;
      }
    });
  }

  public get smashPlayers(): Array<smashPlayer> {
    return this._smashPlayers;
  }

  public biggestLoser: smashPlayer;
  public biggestLoserValue: number = 0;

  public biggestWinner: smashPlayer;
  public biggestWinnerValue: number = 0;
}
