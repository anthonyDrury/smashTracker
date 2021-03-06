import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";
import { names } from "../../../assets/data/smash.data";
import {
  AddBettingPlayer,
  AddSmashPlayer,
  DeleteBettingPlayer,
  DeleteSmashPlayer,
  EditSmashPlayerOwes,
  ResetAllSmashPlayerOwes,
  SmashPlayerWon
} from "../actions/smash.action";
import { oweObj, smashPlayer } from "../models/smash.model";

export class smashStateModel {
  smashPlayers: Array<smashPlayer>;
  bettingPlayers: Array<smashPlayer>;
  bettingValue: number;
}

@State<smashStateModel>({
  name: "smashPlayers"
})
export class SmashState implements NgxsOnInit {
  ngxsOnInit(stateContext: StateContext<smashStateModel>) {
    const smashState: smashStateModel = stateContext.getState();
    if (smashState.smashPlayers === undefined) {
      stateContext.setState({
        smashPlayers: [
          ...names.map((name: string) => new smashPlayer(name, names))
        ],
        bettingPlayers: [],
        bettingValue: 5
      });
    }
  }

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

  // Add a player
  @Action(AddSmashPlayer)
  addPlayer(
    context: StateContext<smashStateModel>,
    action: AddSmashPlayer
  ): void {
    const state = context.getState();
    context.patchState({
      smashPlayers: [...state.smashPlayers, action.player]
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

  // Edit a player
  @Action(EditSmashPlayerOwes)
  editPlayerOwes(
    context: StateContext<smashStateModel>,
    action: EditSmashPlayerOwes
  ): void {
    const state = context.getState();

    context.patchState({
      smashPlayers: new Array(
        ...state.smashPlayers.filter(
          (player: smashPlayer) => player.userId !== action.player.userId
        ),
        action.player
      )
    });
  }

  // Rest all amounts owed
  @Action(ResetAllSmashPlayerOwes)
  resetAllSmashPlayerOwes(context: StateContext<smashStateModel>): void {
    const state = context.getState();

    context.patchState({
      bettingPlayers: new Array(
        ...state.bettingPlayers.map(
          (player: smashPlayer): smashPlayer => {
            return {
              ...player,
              owes: player.owes.map(
                (owe: oweObj): oweObj => {
                  return { name: owe.name, amount: 0 };
                }
              )
            };
          }
        )
      ),
      smashPlayers: new Array(
        ...state.smashPlayers.map(
          (player: smashPlayer): smashPlayer => {
            return {
              ...player,
              owes: player.owes.map(
                (owe: oweObj): oweObj => {
                  return { name: owe.name, amount: 0 };
                }
              )
            };
          }
        )
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
      bettingPlayers: [
        ...state.bettingPlayers.filter(
          (player: smashPlayer) => player.userId !== action.player.userId
        ),
        action.player
      ]
    });
  }

  // Delete a betting player
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

  // A player won, edit oweing amounts
  @Action(SmashPlayerWon)
  playerWon(
    context: StateContext<smashStateModel>,
    action: SmashPlayerWon
  ): void {
    const state: smashStateModel = context.getState();

    // Array of betting player userId
    const playerNameArr: Array<string> = state.bettingPlayers.map(
      (value: smashPlayer) => value.name
    );

    // If winning player already owes money to one of the betters
    // Minus money owed to that player insted
    state.smashPlayers.forEach((player: smashPlayer, playerIndex: number) => {
      if (player.userId === action.player.userId) {
        // If winning player already owes betting losers
        player.owes.forEach((oweObj: oweObj, oweIndex: number) => {
          if (
            playerNameArr.includes(oweObj.name) &&
            oweObj.amount >= state.bettingValue
          ) {
            state.smashPlayers[playerIndex].owes[oweIndex] = {
              name: oweObj.name,
              amount: oweObj.amount - state.bettingValue
            };
            playerNameArr.splice(playerNameArr.indexOf(oweObj.name));
          }
        });
      }
    });

    // Add money owed for the winning player to all the other players
    state.smashPlayers.forEach((player: smashPlayer, playerIndex: number) => {
      if (
        player.userId !== action.player.userId &&
        playerNameArr.includes(player.name)
      ) {
        player.owes.forEach((owe: oweObj, oweIndex: number) => {
          if (owe.name === action.player.name) {
            state.smashPlayers[playerIndex].owes[oweIndex].amount +=
              state.bettingValue;
          }
        });
      }
    });

    context.patchState({
      // Otherwise changes to the owes Map are not recognised
      bettingPlayers: new Array(...state.bettingPlayers),
      smashPlayers: new Array(...state.smashPlayers)
    });
  }
}
