import { createWebSocketStream, WebSocket } from 'ws';
import { commands } from './commands';

export const connection = async (ws: WebSocket) => {
  const wss = createWebSocketStream(ws, { encoding: 'utf-8', decodeStrings: false });

  wss.on('data', async (chunk: string) => {
    try {
      const [command, ...params] = chunk?.split(' ');
      const [x, y] = params.map(Number);

      const run = commands();

      const isValidCommand = Object.prototype.hasOwnProperty.call(run, command);

      if (!isValidCommand) {
        throw new Error(`Command ${command} is incorrect`);
      }

      process.stdout.write(`<- ${command} ${params}\n`);
      const res = await run[command](x,y);

      wss.write(`${command} ${res} \0`);
      if (res) process.stdout.write(`-> ${command}: ${res}\n`);
      
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  });
  ws.on('close', () => {
    console.info('Connection closed!');
  });
}
