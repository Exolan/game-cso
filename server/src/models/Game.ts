import { GamePhase, Player } from "src/types/types";

export class Game {
  public players: Map<string, Player>;
  public gamePhase: GamePhase;
  public minPlayers: number;
  public maxPlayers: number;

  constructor() {
    this.players = new Map();
    this.gamePhase = "lobby";
    this.minPlayers = 4;
    this.maxPlayers = 10;
  }

  public craetePlayer(playerSocket: string): void {
    const playerId = this.players.size;

    this.players.set(playerSocket, {
      playerId: playerId,
      isReady: false,
    });
  }

  public setPlayerIsReady(playerSocket: string): void {
    const player = this.players.get(playerSocket);

    if (!player) {
      return;
    }

    player.isReady = true;
  }

  public allPlayersIsReady(): boolean {
    const countPlayers = this.players.size;

    if (countPlayers < this.minPlayers) {
      return false;
    }

    let countReadyPlayers = 0;

    this.players.forEach((player) => {
      if (player.isReady) {
        countReadyPlayers += 1;
      }
    });

    if (countReadyPlayers === countPlayers) {
      this.gamePhase = "cards";
      return true;
    }

    return false;
  }

  public getAllPlayers(): {} {
    return Array.from(this.players, ([playerSocket, playerData]) => ({
      playerSocket,
      ...playerData,
    }));
  }

  public resetPlayersIsReady(): void {
    this.players.forEach((playerData) => {
      playerData.isReady = false;
    });
  }

  public deletePlayer(playerSocket: string): void {
    this.players.delete(playerSocket);
  }
}
