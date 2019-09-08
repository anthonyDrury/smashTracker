import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { take, tap } from "rxjs/operators";
import { BettingListIncludesPlayerPipe } from "../../pipes/betting-list-includes-player.pipe";
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
    private readonly changeDetector: ChangeDetectorRef,
    private readonly bettingListIncludesPipe: BettingListIncludesPlayerPipe
  ) {}

  public addOrRemovePlayerFromBettingList(player: smashPlayer): void {
    this.bettingListIncludesPipe
      .transform(player)
      .pipe(
        take(1),
        tap((bettingListIncludesPlayer: boolean) => {
          if (bettingListIncludesPlayer) {
            this.store.dispatch(new DeleteBettingPlayer(player));
          } else {
            this.store.dispatch(new AddBettingPlayer(player));
          }
        })
      )
      .toPromise();
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
