"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game() {
        this.players = new Map();
        this.gamePhase = "lobby";
        this.minPlayers = 4;
        this.maxPlayers = 10;
    }
    Game.prototype.craetePlayer = function (playerSocket) {
        var playerId = this.players.size;
        this.players.set(playerSocket, {
            playerId: playerId,
            isReady: false,
        });
    };
    Game.prototype.setPlayerIsReady = function (playerSocket) {
        var player = this.players.get(playerSocket);
        if (!player) {
            return;
        }
        player.isReady = true;
    };
    Game.prototype.allPlayersIsReady = function () {
        var countPlayers = this.players.size;
        if (countPlayers < this.minPlayers) {
            return false;
        }
        var countReadyPlayers = 0;
        this.players.forEach(function (player) {
            if (player.isReady) {
                countReadyPlayers += 1;
            }
        });
        if (countReadyPlayers === countPlayers) {
            this.gamePhase = "cards";
            return true;
        }
        return false;
    };
    Game.prototype.getAllPlayers = function () {
        return Array.from(this.players, function (_a) {
            var playerSocket = _a[0], playerData = _a[1];
            return (__assign({ playerSocket: playerSocket }, playerData));
        });
    };
    Game.prototype.resetPlayersIsReady = function () {
        this.players.forEach(function (playerData) {
            playerData.isReady = false;
        });
    };
    Game.prototype.deletePlayer = function (playerSocket) {
        this.players.delete(playerSocket);
    };
    return Game;
}());
exports.Game = Game;
