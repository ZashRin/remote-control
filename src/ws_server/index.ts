import { WebSocketServer } from "ws";
import { connection } from "./connection";

export const wsServer = new WebSocketServer({ port: 8080 });

wsServer.on('connection', connection);
