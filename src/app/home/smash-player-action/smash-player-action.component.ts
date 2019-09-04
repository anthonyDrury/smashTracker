import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { smashPlayer } from "../../models/smash.model";
import { SmashService } from "../../smashService/smash.service";

@Component({
  selector: "app-smash-player-action",
  templateUrl: "./smash-player-action.component.html",
  styleUrls: ["./smash-player-action.component.scss"]
})
export class SmashPlayerActionComponent implements OnInit {
  private _smashPlayer?: smashPlayer;

  @Input()
  public set smashPlayer(player: smashPlayer) {
    this._smashPlayer = player;
  }

  public get smashPlayer(): smashPlayer {
    return this._smashPlayer;
  }

  @Input()
  public checked: boolean = false;

  @Output()
  public toggle: EventEmitter<smashPlayer> = new EventEmitter<smashPlayer>();

  public owesAmount$?: Observable<number>;

  constructor(public readonly smashService: SmashService) {}

  public onToggleChange(): void {
    this.toggle.emit(this.smashPlayer);
  }

  ngOnInit() {}
}
