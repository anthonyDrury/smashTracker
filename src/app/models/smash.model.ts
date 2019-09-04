export class smashPlayer {
  name: string;
  userId: string;
  doubleOrNothingAvailable: boolean;
  owes: Map<string, number>;

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
