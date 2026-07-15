import { Player } from "./player.js";
import { Maze } from "./maze.js";
import { MAZE_SIZE } from "./constants.js";
import { MAZE_START_X, MAZE_START_Y } from "./constants.js";

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.player = new Player(MAZE_START_Y, MAZE_START_X);
        this.maze = new Maze(MAZE_SIZE);
    }

    handleGameWon() {
        alert("Maze Complete! 🎉");
        this.player = new Player(MAZE_START_Y, MAZE_START_X);
        this.maze = new Maze(MAZE_SIZE);
    }

    update() {
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