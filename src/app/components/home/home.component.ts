import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import {
  AddBettingPlayer,
  DeleteBettingPlayer,
  SmashPlayerWon
} from "../../stateManagement/actions/smash.action";
import { smashPlayer } from "../../stateManagement/models/smash.model";
import { SmashState } from "../../stateManagement/state/smash.state";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
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
    this._subscriptions.push(
      this.smashPlayers$.subscribe((smashPlayers: Array<smashPlayer>) => {
        this.smashPlayers = smashPlayers;
        this.changeDetector.detectChanges();
      })
    );

    this._subscriptions.push(
      this.smashBetters$.subscribe((smashBetters: Array<smashPlayer>) => {
        this.bettingList = smashBetters;
        this.changeDetector.detectChanges();
      })
    );
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }
}
