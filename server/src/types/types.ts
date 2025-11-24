export type GamePhase = "lobby" | "cards" | "game";

export interface Player {
  playerId: number;
  isReady: boolean;
}
