export interface Commands {
  [key: string]: Function,
  mouse_up: (_y: number) => void;
  mouse_down: (_y: number) => void;
  mouse_left: (_x: number) => void;
  mouse_right: (_x: number) => void;
  mouse_position: () => string;
  prnt_scrn: () => Promise<string>;
  draw_square: (length: number) => void;
  draw_rectangle: (width: number, height: number) => void;
  draw_circle: (radius: number) => void;
}
