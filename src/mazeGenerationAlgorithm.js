  import { MAZE_START_X, MAZE_START_Y, MAZE_FINISH_X, MAZE_FINISH_Y } from "./constants.js";
  
  /*
    Generates a matrix-representation of a maze using the following backtracking algorithm:

    1.  Start at a random cell and mark it as visited
    2.  While there are unvisited cells, pick a random unvisited neighbor
    3.  Remove the wall between the current cell and chosen neighbor
    4.  Move to the neighbor and repeat
    5.  If no unvisited neighbors exist, backtrack to find one

    NOTE: Cells are located at the martix coordinates with an odd x and y position (ex: (1, 1), (1, 3))
    NOTE: 1 = wall, 0 = path
    NOTE: Maze size should be an odd number
  */
  export default function generateMaze(mazeSize) {
    // Create matrix of 1s (walls)
    const maze = new Array(mazeSize);
    for (let i = 0; i < mazeSize; i++) {
      maze[i] = new Array(mazeSize).fill(1);
    }

    const visited = new Array(mazeSize);
    for (let j = 0; j < mazeSize; j++) {
      visited[j] = new Array(mazeSize).fill(false);
    }

    const stack = [];

    // Identify random cell to start at
    const randomCellCoordinates = pickRandomCell(mazeSize);
    const [startX, startY] = randomCellCoordinates;
    stack.push(randomCellCoordinates);
    visited[startY][startX] = true;

    while (stack.length > 0) {
      let currentCellCoordinates = stack[stack.length - 1];
      let neighborCoordinates = pickRandomNeighbor(
        currentCellCoordinates,
        mazeSize,
        visited,
      );
      const [currentX, currentY] = currentCellCoordinates;

      if (!neighborCoordinates) {
        maze[currentY][currentX] = 0;
        stack.pop();
      } else {

        const [nextX, nextY] = neighborCoordinates;
        stack.push(neighborCoordinates);
        visited[nextY][nextX] = true;

        const midX = currentX + (nextX - currentX) / 2;
        const midY = currentY + (nextY - currentY) / 2;
        maze[midY][midX] = 0;
      }
    }

    // Create ending and opening
    maze[MAZE_START_Y][MAZE_START_X] = 0;
    maze[MAZE_FINISH_Y][MAZE_FINISH_X] = 0;
    
    return maze;
  }

  // HELPER FUNCTIONS

  function pickRandomCell(mazeSize) {
    const indices = [];
    for (let i = 1; i < mazeSize; i += 2) {
      indices.push(i);
    }
    const randomCellX = indices[Math.floor(Math.random() * indices.length)];
    const randomCellY = indices[Math.floor(Math.random() * indices.length)];

    return [randomCellX, randomCellY];
  }

  function pickRandomNeighbor(cellCoordinates, mazeSize, visited) {
    const [x, y] = cellCoordinates;
    const validNeighbors = new Array();

    // North neighbor
    if (y - 2 >= 0 && !visited[y - 2][x]) {
      validNeighbors.push([x, y - 2]);
    }

    // South neighbor
    if (y + 2 < mazeSize && !visited[y + 2][x]) {
      validNeighbors.push([x, y + 2]);
    }

    // West neighbor
    if (x - 2 >= 0 && !visited[y][x - 2]) {
      validNeighbors.push([x - 2, y]);
    }

    // East neighbor
    if (x + 2 < mazeSize && !visited[y][x + 2]) {
      validNeighbors.push([x + 2, y]);
    }

    if (validNeighbors.length === 0) {
      return null;
    } else {
      return validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
    }
  }