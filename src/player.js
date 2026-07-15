import { MAZE_FINISH_Y, TILE_SIZE, MAZE_START_X, MAZE_START_Y } from "./constants.js";
import { input } from "./input.js";

export class Player {
  constructor() {
    this.row = MAZE_START_Y;
    this.col = MAZE_START_X;
    this.size = TILE_SIZE;
  }

  resetPosition() {
    this.row = MAZE_START_Y;
    this.col = MAZE_START_X;
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
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.col * TILE_SIZE,
      this.row * TILE_SIZE,
      this.size,
      this.size,
    );
  }
}
