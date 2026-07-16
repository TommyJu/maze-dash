import { TILE_SIZE, DEFAULT_MAZE_SIZE } from "./constants.js";
import generateMaze from "./mazeGenerationAlgorithm.js";

export class Maze {
  constructor(size = DEFAULT_MAZE_SIZE) {
    this.createMaze(size);
  }

  createMaze(size) {
    this.maze = generateMaze(size);
    this.size = size;
  }

  get width() {
    return this.size * TILE_SIZE;
  }

  get height() {
    return this.size * TILE_SIZE;
  }

  get finish() {
    return {
      row: this.size - 1,
      col: this.size - 2,
    };
  }

  isValidPosition(row, col) {
    let maxRow = this.maze.length;
    let maxCol = this.maze[0].length;

    if (
      row >= maxRow ||
      col >= maxCol ||
      row < 0 ||
      col < 0 ||
      this.maze[row][col] === 1
    ) {
      return false;
    }
    return true;
  }

  isMazeComplete(player) {
    const finish = this.finish;

    return player.row === finish.row && player.col === finish.col;
  }

  draw(ctx) {
    for (let row = 0; row < this.maze.length; row++) {
      for (let col = 0; col < this.maze[row].length; col++) {
        const x = col * TILE_SIZE;
        const y = row * TILE_SIZE;

        // Draws a wall
        if (this.maze[row][col] === 1) {
          ctx.fillStyle = "black";
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          // Draws a floor
        } else {
          ctx.fillStyle = "white";
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        }
      }
    }
  }
}
