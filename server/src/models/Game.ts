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

  public getAllPlayers(): {} {
    return Array.from(this.players, ([playerSocket, playerData]) => ({
      playerSocket,
      ...playerData,
    }));
  }

  public resetAllPlayersIsReady(): void {
    this.players.forEach((playerData) => {
      playerData.isReady = false;
    });
  }

  public deletePlayer(playerSocket: string): void {
    this.players.delete(playerSocket);
  }
}
