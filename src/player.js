import { TILE_SIZE } from "./constants.js";
import { input } from "./input.js";

export class Player {
  constructor(startingRow, startingCol) {
    this.row = startingRow;
    this.col = startingCol;
    this.size = TILE_SIZE;
  }

  update(maze) {

    const action = input.actions.shift();
    if (!action) return;

    let nextRow = this.row;
    let nextCol = this.col;

    if (action === "up") nextRow -= 1;
    if (action === "down") nextRow += 1;
    if (action === "left") nextCol -= 1;
    if (action === "right") nextCol += 1;

    // collision check
    if (!maze.isWall(nextRow, nextCol)) {
      this.row = nextRow;
      this.col = nextCol;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.col * TILE_SIZE,
      this.row * TILE_SIZE,
      this.size,
      this.size,
    );
  }
}
