import { Game } from "./game.js";


const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const game = new Game(canvas, ctx);

function gameLoop() {
    game.update();
    game.draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();