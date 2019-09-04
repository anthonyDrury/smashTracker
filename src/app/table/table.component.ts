import { Component, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { smashPlayer } from "../models/smash.model";
import { SmashService } from "../smashService/smash.service";
import { SmashState } from "../state/smash.state";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  @Select(SmashState.getSmashPlayers) smashData$: Observable<
    Array<smashPlayer>
  >;

  public displayedColumns: Array<string> = ["name"];
  public dataSource: Array<{}> = [];

  constructor(public readonly smashService: SmashService) {}

  private createTableData(): void {
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
    });
  }

  public ngOnInit(): void {
    this.createTableData();
  }
}
