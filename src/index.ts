import { httpServer } from "./http_server";
import { wsServer, WSS_PORT } from "./ws_server";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

wsServer.on("listening", () => {
  console.log(`Start WebSocketServer on the ${WSS_PORT} port!`);
});
