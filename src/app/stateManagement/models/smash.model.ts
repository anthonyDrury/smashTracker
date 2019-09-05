export class smashPlayer {
  name: string;
  userId: string;
  doubleOrNothingAvailable: boolean;
  owes: Map<string, number>;

  getTotalOwes() {
    return Array.from(this.owes)
      .map((owes: [string, number]) => owes[1])
      .reduce((x: number, y: number) => x + y);
  }

  getTotalOweingToPlayer(player: smashPlayer) {
    return Array.from(this.owes)
      .map((owes: [string, number]) => (owes[0] === player.name ? owes[1] : 0))
      .reduce((x: number, y: number) => x + y);
  }

  getTotalOwed(smashPlayers: Array<smashPlayer>) {
    return smashPlayers
      .map((player: smashPlayer) => player.getTotalOweingToPlayer(this))
      .reduce((x: number, y: number) => x + y);
  }

  constructor(name: string, players: Array<string>) {
    this.name = name;
    this.doubleOrNothingAvailable = true;
    this.owes = new Map<string, number>(
      players.map((name: string): [string, number] => [name, 0])
    );
    this.userId = Math.random()
      .toString(36)
      .substring(7);
  }
}
