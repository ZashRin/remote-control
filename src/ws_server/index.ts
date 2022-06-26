import { WebSocketServer } from "ws";
import { connection } from "./connection";

export const WSS_PORT = 8080;

export const wsServer = new WebSocketServer({ port: WSS_PORT });

wsServer.on('connection', connection);
