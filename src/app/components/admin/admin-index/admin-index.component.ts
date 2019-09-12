import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { smashPlayer } from "../../../stateManagement/models/smash.model";
import { SmashState } from "../../../stateManagement/state/smash.state";

@Component({
  selector: "app-admin-index",
  templateUrl: "./admin-index.component.html",
  styleUrls: ["./admin-index.component.scss"]
})
export class AdminIndexComponent {
  @Select(SmashState.getSmashPlayers) smashData$: Observable<
    Array<smashPlayer>
  >;
}
