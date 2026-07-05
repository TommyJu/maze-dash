import { Player } from "./player.js";
import { Maze } from "./maze.js";

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.player = new Player(0, 0);
        this.maze = new Maze();
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