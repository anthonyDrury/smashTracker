import { ChangeDetectorRef, Component, Input } from "@angular/core";
import {
  oweObj,
  smashPlayer
} from "../../../stateManagement/models/smash.model";

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
          .map((owe: oweObj) => owe.amount)
          .reduce((x: number, y: number) => x + y)
      )
      .reduce((x: number, y: number) => x + y);
  }

  public get smashPlayers(): Array<smashPlayer> {
    return this._smashPlayers;
  }

  public smashTotal: number = 0;

  constructor(private readonly changeDetector: ChangeDetectorRef) {}
}
