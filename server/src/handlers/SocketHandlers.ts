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
    this.onPlayerIsReady(socket);
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
          return;
        }

        this.game.craetePlayer(socket.id);

        Logger.info("Игрок подключился", { socketId: socket.id });

        socket.emit("changeGamePhase", this.game.gamePhase);
        this.emitLobbyUpdate();
      } catch (error) {
        Logger.error("Ошибка подключения игрока", error, {
          socketId: socket.id,
        });
      }
    });
  }

  private onPlayerIsReady(socket: Socket): void {
    socket.on("playerIsReady", () => {
      try {
        const player = this.game.players.get(socket.id);
        if (!player) {
          return;
        }

        if (player.isReady) {
          return;
        }

        player.isReady = true;

        Logger.info(`Игрок ${player.playerId} готов`);

        this.emitLobbyUpdate();

        if (this.game.allPlayersIsReady()) {
          this.io.emit("changeGamePhase", this.game.gamePhase);
        }
      } catch (error) {
        Logger.error("Ошибка готовности игрока", error, {
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
          this.game.resetPlayersIsReady();
          this.io.emit("backToLobby");
        }

        Logger.info("Игрок отключился", { socketId: socket.id, reason });
        this.game.deletePlayer(socket.id);
        this.emitLobbyUpdate();
      } catch (error) {}
    });
  }
}
