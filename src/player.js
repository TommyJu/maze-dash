import {
  TILE_SIZE
} from "./constants.js";
import { input } from "./input.js";

export class Player {
  constructor() {
    this.resetPosition();
  }

  resetPosition() {
    this.row = 1;
    this.col = 0;
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
    if (maze.isValidPosition(nextRow, nextCol)) {
      this.row = nextRow;
      this.col = nextCol;
    }
  }

  draw(ctx) {
    ctx.font = `${TILE_SIZE}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      "😀",
      this.col * TILE_SIZE + TILE_SIZE / 2,
      this.row * TILE_SIZE + TILE_SIZE / 2,
    );
  }
}
