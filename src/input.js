export const input = {
  actions: []
};

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyW":
    case "ArrowUp":
      input.actions.push("up");
      break;

    case "KeyS":
    case "ArrowDown":
      input.actions.push("down");
      break;

    case "KeyA":
    case "ArrowLeft":
      input.actions.push("left");
      break;

    case "KeyD":
    case "ArrowRight":
      input.actions.push("right");
      break;
  }
});