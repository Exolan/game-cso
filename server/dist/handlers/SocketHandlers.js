"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketHandlers = void 0;
var logger_1 = __importDefault(require("../utils/logger"));
var SocketHandlers = /** @class */ (function () {
    function SocketHandlers(io, game) {
        this.io = io;
        this.game = game;
    }
    SocketHandlers.prototype.initAllHandlers = function (socket) {
        this.onPlayerConnect(socket);
        this.onPlayerDisconnect(socket);
        this.onGetLobby(socket);
    };
    SocketHandlers.prototype.emitLobbyUpdate = function () {
        this.io.emit("lobbyUpdate", this.game.getAllPlayers());
    };
    SocketHandlers.prototype.onGetLobby = function (socket) {
        var _this = this;
        socket.on("getLobby", function () { return _this.emitLobbyUpdate(); });
    };
    SocketHandlers.prototype.onPlayerConnect = function (socket) {
        var _this = this;
        socket.on("playerConnect", function () {
            try {
                var player = _this.game.players.get(socket.id);
                if (player) {
                    logger_1.default.warn("Игрок уже подключился", player);
                    return;
                }
                _this.game.craetePlayer(socket.id);
                logger_1.default.info("Игрок подключился", player);
                _this.emitLobbyUpdate();
            }
            catch (error) {
                logger_1.default.error("Ошибка подключения игрока", error, {
                    socketId: socket.id,
                });
            }
        });
    };
    SocketHandlers.prototype.onPlayerDisconnect = function (socket) {
        var _this = this;
        socket.on("disconnect", function (reason) {
            try {
                var player = _this.game.players.get(socket.id);
                if (!player) {
                    logger_1.default.warn("Игрока не существует!");
                    return;
                }
                if (_this.game.gamePhase !== "game") {
                    _this.game.resetAllPlayersIsReady();
                    _this.io.emit("backToLobby");
                }
                logger_1.default.info("Игрок отключился", { socketId: socket.id, reason: reason });
                _this.game.deletePlayer(socket.id);
                _this.emitLobbyUpdate();
            }
            catch (error) { }
        });
    };
    return SocketHandlers;
}());
exports.SocketHandlers = SocketHandlers;
