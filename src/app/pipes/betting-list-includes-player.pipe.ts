import { Pipe, PipeTransform } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { smashPlayer } from "../stateManagement/models/smash.model";
import { SmashState } from "../stateManagement/state/smash.state";

@Pipe({
  name: "bettingListIncludesPlayer"
})
export class BettingListIncludesPlayerPipe implements PipeTransform {
  @Select(SmashState.getSmashBetters) smashBetters$: Observable<
    Array<smashPlayer>
  >;

  transform(player: smashPlayer, ...args: any[]): Observable<boolean> {
    return this.smashBetters$.pipe(
      map(
        (betters: Array<smashPlayer>) =>
          betters.find(
            (better: smashPlayer) => better.userId === player.userId
          ) !== undefined
      )
    );
  }
}
