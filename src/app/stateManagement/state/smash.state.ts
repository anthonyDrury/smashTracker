import { Action, Selector, State, StateContext } from "@ngxs/store";
import { names } from "../../smashService/smash.data";
import {
  AddBettingPlayer,
  AddSmashPlayer,
  DeleteBettingPlayer,
  DeleteSmashPlayer,
  SmashPlayerWon
} from "../actions/smash.action";
import { smashPlayer } from "../models/smash.model";

export class smashStateModel {
  smashPlayers: Array<smashPlayer>;
  bettingPlayers: Array<smashPlayer>;
  bettingValue: number;
}

@State<smashStateModel>({
  name: "smashPlayers",
  defaults: {
    smashPlayers: [
      ...names.map((name: string) => new smashPlayer(name, names))
    ],
    bettingPlayers: [],
    bettingValue: 5
  }
})
export class SmashState {
  // Get all players
  @Selector() static getSmashPlayers(
    state: smashStateModel
  ): Array<smashPlayer> {
    return state.smashPlayers;
  }

  // Get all betters
  @Selector() static getSmashBetters(
    state: smashStateModel
  ): Array<smashPlayer> {
    return state.bettingPlayers;
  }

  // Get all betters
  @Selector() static getSmashPlayerFromId(
    state: smashStateModel,
    userId
  ): smashPlayer | undefined {
    return state.smashPlayers.map((player: smashPlayer) => {
      if (player.userId === userId) {
        return player;
      }
    })[0];
  }

  // Add a player
  @Action(AddSmashPlayer)
  addPlayer(
    context: StateContext<smashStateModel>,
    action: AddSmashPlayer
  ): void {
    const state = context.getState();
    context.patchState({
      smashPlayers: [...state.smashPlayers, action.payload]
    });
  }

  // Delete a player
  @Action(DeleteSmashPlayer)
  deletePlayer(
    context: StateContext<smashStateModel>,
    action: DeleteSmashPlayer
  ): void {
    const state = context.getState();
    context.patchState({
      smashPlayers: state.smashPlayers.filter(
        (player: smashPlayer) => player.userId !== action.player.userId
      )
    });
  }

  // Add a betting player
  @Action(AddBettingPlayer)
  addBetter(
    context: StateContext<smashStateModel>,
    action: AddBettingPlayer
  ): void {
    const state = context.getState();
    context.patchState({
      bettingPlayers: [...state.bettingPlayers, action.payload]
    });
  }

  // Delete a player
  @Action(DeleteBettingPlayer)
  deleteBetter(
    context: StateContext<smashStateModel>,
    action: DeleteBettingPlayer
  ): void {
    const state = context.getState();
    context.patchState({
      bettingPlayers: state.bettingPlayers.filter(
        (player: smashPlayer) => player.userId !== action.player.userId
      )
    });
  }

  // Delete a player
  @Action(SmashPlayerWon)
  playerWon(
    context: StateContext<smashStateModel>,
    action: SmashPlayerWon
  ): void {
    const state: smashStateModel = context.getState();

    // Array of betting player userId
    const playerNameArr: Array<string> = state.smashPlayers.map(
      (value: smashPlayer) => value.name
    );

    // If winning player already owes money to one of the betters
    // Minus money owed to that player insted
    state.smashPlayers.forEach((value: smashPlayer) => {
      if (value.userId === action.player.userId) {
        value.owes.forEach((amount: number, names: string) => {
          if (playerNameArr.includes(names) && amount >= state.bettingValue) {
            value.owes.set(names, amount - state.bettingValue);
            playerNameArr.splice(playerNameArr.indexOf(names));
          }
        });
      }
    });

    // Add money owed for the winning player to all the other players
    state.smashPlayers.forEach((player: smashPlayer) => {
      if (
        player.userId !== action.player.userId &&
        playerNameArr.includes(player.name)
      ) {
        player.owes.set(
          action.player.name,
          player.owes.get(action.player.name) + state.bettingValue
        );
      }
    });

    context.patchState({
      // Otherwise changes to the owes Map are not recognised
      smashPlayers: new Array(...state.smashPlayers)
    });
  }
}
