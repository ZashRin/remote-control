import robot, { mouseToggle } from 'robotjs';

export const drawRectangle = (x: number, y: number, width: number, height?: number) => {
  mouseToggle('down');
  for (let i = 0; i <= width; i += 4) {
    robot.moveMouse(x + i, y);
  }
  for (let i = 0; i <= (height || width); i += 4) {
    robot.moveMouse(x + width, y + i);
  }
  for (let i = 0; i <= width; i += 4) {
    robot.moveMouse(x + width - i, y + (height || width));
  }
  for (let i = 0; i <= (height || width); i += 4) {
    robot.moveMouse(x, y + (height || width) - i);
  }
  mouseToggle('up');
}
