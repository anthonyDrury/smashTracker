import { Component, OnDestroy, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { SmashService } from "../../smashService/smash.service";
import { smashPlayer } from "../../stateManagement/models/smash.model";
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

  constructor(public readonly smashService: SmashService) {}

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
          player.owes.forEach((amount: number, name: string) => {
            const owedName:
              | smashPlayer
              | undefined = this.smashService.getPlayerFromName(players, name);
            if (owedName !== undefined) {
              elementObj[owedName.name] = amount;
            }
          });
          this.dataSource.push(elementObj);
        });
      })
    );
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }
}
