import { Server, Socket } from "socket.io";
import { Game } from "src/models/Game";
import Logger from "../utils/logger";

export class SocketHandlers {
  private readonly io: Server;
  private readonly game: Game;

  constructor(io: Server, game: Game) {
    this.io = io;
    this.game = game;
  }

  public initAllHandlers(socket: Socket): void {
    this.onPlayerConnect(socket);
    this.onPlayerDisconnect(socket);
    this.onGetLobby(socket);
  }

  private emitLobbyUpdate(): void {
    this.io.emit("lobbyUpdate", this.game.getAllPlayers());
  }

  private onGetLobby(socket: Socket): void {
    socket.on("getLobby", () => this.emitLobbyUpdate());
  }

  private onPlayerConnect(socket: Socket): void {
    socket.on("playerConnect", () => {
      try {
        const player = this.game.players.get(socket.id);
        if (player) {
          Logger.warn("Игрок уже подключился", player);
          return;
        }

        this.game.craetePlayer(socket.id);

        Logger.info("Игрок подключился", player);

        this.emitLobbyUpdate();
      } catch (error) {
        Logger.error("Ошибка подключения игрока", error, {
          socketId: socket.id,
        });
      }
    });
  }

  private onPlayerDisconnect(socket: Socket): void {
    socket.on("disconnect", (reason: string) => {
      try {
        const player = this.game.players.get(socket.id);

        if (!player) {
          Logger.warn("Игрока не существует!");
          return;
        }

        if (this.game.gamePhase !== "game") {
          this.game.resetAllPlayersIsReady();
          this.io.emit("backToLobby");
        }

        Logger.info("Игрок отключился", { socketId: socket.id, reason });
        this.game.deletePlayer(socket.id);
        this.emitLobbyUpdate();
      } catch (error) {}
    });
  }
}
