import { Player } from "./player.js";

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.player = new Player(50, 50);
    }

    update() {
        this.player.update();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.player.draw(this.ctx);
    }
}