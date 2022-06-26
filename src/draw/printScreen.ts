import robot from 'robotjs';
import Jimp from 'jimp';

export const printScreen = async (
  x: number, 
  y: number, 
  width: number, 
  height: number
  ): Promise<Jimp> => new Promise((resolve) => {
    const bitmap = robot.screen.capture(x, y, width, height);
    const image = new Jimp(bitmap.width, bitmap.height);

    let pos = 0;

    image.scanQuiet(
      0,
      0,
      image.bitmap.width,
      image.bitmap.height,
      (x, y, idx) => {
        image.bitmap.data[idx + 2] = bitmap.image.readUInt8(pos++);
        image.bitmap.data[idx + 1] = bitmap.image.readUInt8(pos++);
        image.bitmap.data[idx + 0] = bitmap.image.readUInt8(pos++);
        image.bitmap.data[idx + 3] = bitmap.image.readUInt8(pos++);
      }
    );

    resolve(image);
});
