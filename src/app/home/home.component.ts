import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import {
  AddBettingPlayer,
  DeleteBettingPlayer,
  SmashPlayerWon
} from "../actions/smash.action";
import { smashPlayer } from "../models/smash.model";
import { SmashState } from "../state/smash.state";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  // @Select(SmashState) smashState$: Observable<smashStateModel>;

  @Select(SmashState.getSmashPlayers) smashPlayers$: Observable<
    Array<smashPlayer>
  >;
  public smashPlayers: Array<smashPlayer>;

  @Select(SmashState.getSmashBetters) smashBetters$: Observable<
    Array<smashPlayer>
  >;

  public bettingList: Array<smashPlayer> = new Array<smashPlayer>();

  constructor(
    private readonly store: Store,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  public addOrRemovePlayerFromBettingList(player: smashPlayer): void {
    if (!this.bettingList.includes(player)) {
      this.store.dispatch(new AddBettingPlayer(player));
    } else {
      this.store.dispatch(new DeleteBettingPlayer(player));
    }
  }

  public onPlayerWon(player: smashPlayer): void {
    this.store.dispatch(new SmashPlayerWon(player));
  }

  public ngOnInit(): void {
    this.smashPlayers$.subscribe((smashPlayers: Array<smashPlayer>) => {
      this.smashPlayers = smashPlayers;
      this.changeDetector.detectChanges();
    });

    this.smashBetters$.subscribe((smashBetters: Array<smashPlayer>) => {
      this.bettingList = smashBetters;
      this.changeDetector.detectChanges();
    });
  }
}
