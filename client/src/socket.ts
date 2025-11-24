import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://172.18.208.1:3001";

export const socket: Socket = io(SOCKET_URL, {
  autoConnect: false,
});
