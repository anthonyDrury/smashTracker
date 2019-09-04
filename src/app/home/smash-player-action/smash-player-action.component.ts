import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable } from "rxjs";
import { smashPlayer } from "../../models/smash.model";
import { SmashService } from "../../smashService/smash.service";

@Component({
  selector: "app-smash-player-action",
  templateUrl: "./smash-player-action.component.html",
  styleUrls: ["./smash-player-action.component.scss"]
})
export class SmashPlayerActionComponent {
  @Input()
  public smashPlayer: smashPlayer;

  @Input()
  public checked: boolean = false;

  @Output()
  public toggle: EventEmitter<smashPlayer> = new EventEmitter<smashPlayer>();

  public owesAmount$?: Observable<number>;

  constructor(public readonly smashService: SmashService) {}

  public onToggleChange(): void {
    this.toggle.emit(this.smashPlayer);
  }
}
