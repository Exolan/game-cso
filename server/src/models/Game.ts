import { GamePhase, Player } from "src/types/types";

export class Game {
  public players: Map<string, Player>;
  public gamePhase: GamePhase;

  constructor() {
    this.players = new Map();
    this.gamePhase = "lobby";
  }

  public craetePlayer(playerSocket: string): void {
    const playerId = this.players.size;

    this.players.set(playerSocket, {
      playerId: playerId,
      isReady: false,
    });
  }

  //   public getAllPlayers(): {} {
  //     return this.players.entries();
  //   }

  //   public getPlayerBySocket(socket: string): Player | null {
  //     for (const player of this.players) {
  //       if (player.socket === socket) {
  //         return player;
  //       }
  //     }

  //     return null;
  //   }

  //   public resetAllPlayersIsReady(): void {
  //     for (const player of this.players) {
  //       player.isReady = false;
  //     }
  //   }

  //   public deletePlayer(playerSocket: string): void {
  //     const player = this.getPlayerBySocket(playerSocket);
  //   }
}
