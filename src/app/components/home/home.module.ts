import { NgModule } from "@angular/core";
import { BettingListIncludesPlayerPipe } from "../../pipes/betting-list-includes-player.pipe";
import { FormModule } from "../form/form.module";
import { HomeComponent } from "./home.component";
import { SmashPlayerActionComponent } from "./smash-player-action/smash-player-action.component";
import { SmashPlayerBiggestComponent } from "./smash-player-biggest/smash-player-biggest.component";
import { SmashPlayerTotalComponent } from "./smash-player-total/smash-player-total.component";
import { SmashPlayerWinComponent } from "./smash-player-win/smash-player-win.component";

@NgModule({
  declarations: [
    HomeComponent,
    SmashPlayerActionComponent,
    SmashPlayerWinComponent,
    SmashPlayerTotalComponent,
    SmashPlayerBiggestComponent,
    BettingListIncludesPlayerPipe
  ],
  imports: [FormModule],
  providers: [BettingListIncludesPlayerPipe]
})
export class HomeModule {}
