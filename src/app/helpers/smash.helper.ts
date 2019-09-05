import { oweObj, smashPlayer } from "../stateManagement/models/smash.model";

export function getPlayerFromName(
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

export function getTotalOwes(thisPlayer: smashPlayer) {
  return Array.from(thisPlayer.owes)
    .map((owes: oweObj) => owes.amount)
    .reduce((x: number, y: number) => x + y);
}

export function getTotalOweingToPlayer(
  thisPlayer: smashPlayer,
  player: smashPlayer
) {
  return Array.from(thisPlayer.owes)
    .map((owes: oweObj) => (owes.name === player.name ? owes.amount : 0))
    .reduce((x: number, y: number) => x + y);
}

export function getTotalOwed(
  thisPlayer: smashPlayer,
  smashPlayers: Array<smashPlayer>
) {
  return smashPlayers
    .map((player: smashPlayer) => getTotalOweingToPlayer(player, thisPlayer))
    .reduce((x: number, y: number) => x + y);
}
