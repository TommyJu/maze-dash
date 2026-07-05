import { keys } from "./input.js";

export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.size = 20;
  }

  update() {
    if (keys["KeyW"] || keys["ArrowUp"]) this.y -= this.speed;
    if (keys["KeyS"] || keys["ArrowDown"]) this.y += this.speed;
    if (keys["KeyA"] || keys["ArrowLeft"]) this.x -= this.speed;
    if (keys["KeyD"] || keys["ArrowRight"]) this.x += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
