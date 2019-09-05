import { Component, Input, OnInit } from "@angular/core";
import { smashPlayer } from "../../models/smash.model";

@Component({
  selector: "app-smash-player-biggest",
  templateUrl: "./smash-player-biggest.component.html",
  styleUrls: ["./smash-player-biggest.component.scss"]
})
export class SmashPlayerBiggestComponent implements OnInit {
  private _smashPlayers?: Array<smashPlayer>;

  @Input()
  public set smashPlayers(players: Array<smashPlayer>) {
    this._smashPlayers = players;

    this._smashPlayers.forEach((player: smashPlayer) => {
      if (player.getTotalOwes() > this.biggestLoserValue) {
        this.biggestLoserValue = player.getTotalOwes();
        this.biggestLoser = player;
      }
      if (player.getTotalOwed(this._smashPlayers) > this.biggestWinnerValue) {
        this.biggestWinnerValue = player.getTotalOwed(this._smashPlayers);
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

  constructor() {}

  ngOnInit() {}
}
