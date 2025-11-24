"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3001;
var httpServer = (0, http_1.createServer)(app);
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../client/build")));
app.get("*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../client/build", "index.html"));
});
app.get("/", function (req, res) {
    res.json({
        message: "Игровой сервер запущен",
    });
});
io.on("connection", function (socket) {
    console.log("\u0418\u0433\u0440\u043E\u043A \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u043B\u0441\u044F: ".concat(socket.id));
});
process.on("SIGINT", function () {
    console.log("\nВыключение сервера...");
    setTimeout(function () {
        process.exit(0);
    }, 1000);
});
httpServer.listen(PORT, function () {
    console.log("Игровой сервер запущен!");
    console.log("\u041F\u043E\u0440\u0442: ".concat(PORT));
    console.log("\u0420\u0435\u0436\u0438\u043C: ".concat(process.env.NODE_ENV || "development"));
    console.log("Время запуска:", new Date().toLocaleString());
    console.log("────────────────────────────────────");
});
