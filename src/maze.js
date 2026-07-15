import { TILE_SIZE } from "./constants.js";
import generateMaze from "./mazeGenerationAlgorithm.js";
import { MAZE_FINISH_X, MAZE_FINISH_Y } from "./constants.js";

export class Maze {
  constructor(mazeSize) {
    this.maze = generateMaze(mazeSize);
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
    if (player.row === MAZE_FINISH_Y && player.col === MAZE_FINISH_X) {
      return true;
    } else {
      return false;
    }
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
