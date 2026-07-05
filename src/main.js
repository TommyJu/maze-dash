import { Game } from "./game.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const game = new Game(canvas, ctx);

function gameLoop() {
    game.update();
    game.draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();