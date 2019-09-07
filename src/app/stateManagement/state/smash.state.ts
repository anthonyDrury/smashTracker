import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";
import { names } from "../../../assets/data/smash.data";
import {
  AddBettingPlayer,
  AddSmashPlayer,
  DeleteBettingPlayer,
  DeleteSmashPlayer,
  EditSmashPlayerOwes,
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
    state.bettingPlayers.forEach((value: smashPlayer) => {
      if (value.userId === action.player.userId) {
        value.owes.forEach(oweObj => {
          if (
            playerNameArr.includes(oweObj.name) &&
            oweObj.amount >= state.bettingValue
          ) {
            oweObj = {
              name: oweObj.name,
              amount: oweObj.amount - state.bettingValue
            };
            playerNameArr.splice(playerNameArr.indexOf(oweObj.name));
          }
        });
      }
    });

    // Add money owed for the winning player to all the other players
    state.bettingPlayers.forEach((player: smashPlayer) => {
      if (
        player.userId !== action.player.userId &&
        playerNameArr.includes(player.name)
      ) {
        player.owes.find(
          (owe: oweObj) => owe.name === action.player.name
        ).amount += state.bettingValue;
      }
    });

    context.patchState({
      // Otherwise changes to the owes Map are not recognised
      bettingPlayers: new Array(...state.bettingPlayers),
      smashPlayers: new Array(...state.smashPlayers)
    });
  }
}
