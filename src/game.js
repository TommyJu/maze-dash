import { Player } from "./player.js";
import { Maze } from "./maze.js";
import { input } from "./input.js";

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.player = new Player();
        this.maze = new Maze();
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