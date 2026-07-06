import { Player } from "./player.js";
import { Maze } from "./maze.js";
import { MAZE_SIZE } from "./constants.js";

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.player = new Player(0, 0);
        this.maze = new Maze();
        this.maze.generate(MAZE_SIZE);
    }

    update() {
        this.player.update(this.maze);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.maze.draw(this.ctx);
        this.player.draw(this.ctx);
        
    }
}