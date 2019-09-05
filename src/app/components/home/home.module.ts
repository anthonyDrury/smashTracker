import { NgModule } from "@angular/core";
import { FormModule } from "../form/form.module";
import { HomeComponent } from "./home.component";
import { SmashPlayerActionComponent } from "./smash-player-action/smash-player-action.component";
import { SmashPlayerWinComponent } from './smash-player-win/smash-player-win.component';
import { SmashPlayerTotalComponent } from './smash-player-total/smash-player-total.component';
import { SmashPlayerBiggestComponent } from './smash-player-biggest/smash-player-biggest.component';

@NgModule({
  declarations: [HomeComponent, SmashPlayerActionComponent, SmashPlayerWinComponent, SmashPlayerTotalComponent, SmashPlayerBiggestComponent],
  imports: [FormModule]
})
export class HomeModule {}
