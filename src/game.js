import { Player } from "./player.js";
import { Maze } from "./maze.js";
import { input } from "./input.js";
import { MAX_MAZE_SIZE, MIN_MAZE_SIZE } from "./constants.js";

export class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.player = new Player();
    this.maze = new Maze();

    this.setupMazeInput();

    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvas.width = this.maze.width;
    this.canvas.height = this.maze.height;
  }

  setupMazeInput() {
    const mazeSizeInput = document.getElementById("maze-size");
    const generateButton = document.getElementById("generate-maze");

    generateButton.addEventListener("click", () => {
      let size = Number(mazeSizeInput.value);

      size = Math.max(MIN_MAZE_SIZE, Math.min(MAX_MAZE_SIZE, size));

      if (size % 2 === 0) {
        size++;
      }

      mazeSizeInput.value = size;

      this.maze.createMaze(size);
      this.player.resetPosition();
      this.resizeCanvas();
    });
  }

  handleGameWon() {
    alert("Maze Complete! 🎉");
    this.player.resetPosition();
    this.maze.createMaze();
  }

  handleGameCommand(gameCommand) {
    if (gameCommand === "reset") {
      this.player.resetPosition();
    }
    if (gameCommand === "generateNewMaze") {
      this.maze.createMaze();
      this.player.resetPosition();
    }
  }

  update() {
    const gameCommand = input.gameCommands.shift();
    this.handleGameCommand(gameCommand);

    this.player.update(this.maze);
    if (this.maze.isMazeComplete(this.player)) {
      this.handleGameWon();
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.maze.draw(this.ctx);
    this.player.draw(this.ctx);
  }
}
