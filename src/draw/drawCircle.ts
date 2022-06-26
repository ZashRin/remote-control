import robot, { mouseToggle } from 'robotjs';

export const drawCircle = (x: number, y: number, radius: number) => {
  mouseToggle('down');
  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const _x = x - radius + (radius * Math.cos(i));
    const _y = y + (radius * Math.sin(i));
    robot.moveMouse(_x, _y);
  }
  mouseToggle('up');
}
