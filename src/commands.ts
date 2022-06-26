import robot from 'robotjs';
import { drawCircle } from './draw/drawCircle';
import { drawRectangle } from './draw/drawRectangle';
import { printScreen } from './draw/printScreen';
import { Commands } from './types/commands.model';

export const commands = (): Commands => {
  const {x, y} = robot.getMousePos();

  return {
    mouse_up: (_y: number) => {
      robot.moveMouse(x, y - _y);
    },
    mouse_down: (_y: number) => {
      robot.moveMouse(x, y + _y);
    },
    mouse_left: (_x: number) => {
      robot.moveMouse(x - _x, y);
    },
    mouse_right: (_x: number) => {
      robot.moveMouse(x + _x, y);
    },
    mouse_position: () => {
      return `${x},${y}`;
    },
    prnt_scrn: async () => {
      const image = await printScreen(x, y, 200, 200);
      const base64 = await image.getBase64Async(image.getMIME());
      return base64.substring(22);
    },
    draw_square: (width: number) => {
      drawRectangle(x, y, width);
    },
    draw_rectangle: (width: number, height: number) => {
      drawRectangle(x, y, width, height);
    },
    draw_circle: (radius: number) => {
      drawCircle(x, y, radius);
    },
  }
}