import express from "express";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 3001;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/", (req, res) => {
  res.json({
    message: "Игровой сервер запущен",
  });
});

io.on("connection", (socket) => {
  console.log(`Игрок подключился: ${socket.id}`);
});

process.on("SIGINT", () => {
  console.log("\nВыключение сервера...");
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});

httpServer.listen(PORT, () => {
  console.log("Игровой сервер запущен!");
  console.log(`Порт: ${PORT}`);
  console.log(`Режим: ${process.env.NODE_ENV || "development"}`);
  console.log("Время запуска:", new Date().toLocaleString());
  console.log("────────────────────────────────────");
});
