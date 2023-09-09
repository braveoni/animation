export class Canvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private width: number;
  private height: number;

  constructor(canvas: HTMLCanvasElement, width: number, height: number) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width = width;
    this.height = this.canvas.height = height;
  }

  updateSize(width?: number, height?: number) {
    if (!width) this.width = this.canvas.width = window.innerWidth;
    else this.width = this.canvas.width = width;

    if (!height) this.height = this.canvas.height = window.innerHeight;
    else this.height = this.canvas.height = height;
  }
}
