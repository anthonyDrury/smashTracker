import { smashPlayer } from "../models/smash.model";

export class AddSmashPlayer {
  static readonly type = "[smashPlayer] AddSmashPlayer";

  constructor(public player: smashPlayer) {}
}

export class DeleteSmashPlayer {
  static readonly type = "[smashPlayer] DeleteSmashPlayer";

  constructor(public player: smashPlayer) {}
}

export class AddBettingPlayer {
  static readonly type = "[smashPlayer] AddBettingPlayer";

  constructor(public player: smashPlayer) {}
}

export class DeleteBettingPlayer {
  static readonly type = "[smashPlayer] DeleteBettingPlayer";

  constructor(public player: smashPlayer) {}
}

export class SmashPlayerWon {
  static readonly type = "[smashPlayer] SmashPlayerWon";

  constructor(public player: smashPlayer) {}
}

export class GetSmashPlayerFromId {
  static readonly type = "[smashPlayer] GetSmashPlayerFromId";

  constructor(public userId: string) {}
}
