import { Injectable } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { smashPlayer } from "../stateManagement/models/smash.model";
import { SmashState } from "../stateManagement/state/smash.state";

@Injectable({
  providedIn: "root"
})
export class SmashService {
  @Select(SmashState.getSmashPlayers) smashData$: Observable<
    Array<smashPlayer>
  >;

  public getPlayerFromName(
    players: Array<smashPlayer>,
    name: string
  ): smashPlayer | undefined {
    let playerFound: smashPlayer | undefined;
    players.map((player: smashPlayer) => {
      if (player.name === name) {
        playerFound = player;
      }
    });
    return playerFound;
  }
}
