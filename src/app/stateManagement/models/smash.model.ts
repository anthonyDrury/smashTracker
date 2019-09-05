export interface oweObj {
  name: string;
  amount: number;
}

export class smashPlayer {
  name: string;
  userId: string;
  doubleOrNothingAvailable: boolean;
  owes: Array<oweObj>;

  constructor(name: string, players: Array<string>) {
    this.name = name;
    this.doubleOrNothingAvailable = true;
    this.owes = new Array<oweObj>(
      ...players.map(
        (name: string): oweObj => {
          return {
            name,
            amount: 0
          };
        }
      )
    );
    this.userId = Math.random()
      .toString(36)
      .substring(7);
  }
}
