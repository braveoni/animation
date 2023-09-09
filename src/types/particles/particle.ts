class Particle {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    [this.x, this.y] = [x, y];
  }

  update() {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
  }
}
