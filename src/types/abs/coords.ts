export class Coords {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    [this.x, this.y] = [x, y];
  }

  setX(x: number) {
    this.x = x;
  }

  setY(y: number) {
    this.y = y;
  }
}
