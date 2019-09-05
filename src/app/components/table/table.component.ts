import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { getPlayerFromName } from "../../helpers/smash.helper";
import { oweObj, smashPlayer } from "../../stateManagement/models/smash.model";
import { SmashState } from "../../stateManagement/state/smash.state";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  @Select(SmashState.getSmashPlayers) smashData$: Observable<
    Array<smashPlayer>
  >;

  public displayedColumns: Array<string> = ["name"];
  public dataSource: Array<{}> = [];

  public constructor(private readonly changeDetector: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this._subscriptions.push(
      this.smashData$.subscribe((players: Array<smashPlayer>) => {
        players.forEach((value: smashPlayer) => {
          this.displayedColumns.push(value.name);
        });

        players.forEach((player: smashPlayer) => {
          let elementObj: {} = {
            name: player.name
          };
          player.owes.forEach((owe: oweObj) => {
            const owedName: smashPlayer | undefined = getPlayerFromName(
              players,
              owe.name
            );
            if (owedName !== undefined) {
              elementObj[owedName.name] = owe.amount;
            }
          });
          this.dataSource.push(elementObj);
        });
        this.changeDetector.detectChanges();
      })
    );
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }
}
