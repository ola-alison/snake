const board = document.getElementById("board");
const snake = document.getElementById("snake");
const btnStart = document.getElementById("btn-start");
let boardSize, snakeSize;

let x = 0;
let y = 0;

btnStart.onclick = function setSizes() {
  boardSize = parseInt(document.getElementById("input-board-size").value);
  snakeSize = parseInt(document.getElementById("input-snake-size").value);
  if (isNaN(boardSize) || isNaN(snakeSize)) {
    boardSize = 100;
    snakeSize = 5;
  }

  board.style.display = `block`;
  board.style.width = `${boardSize}px`;
  board.style.height = `${boardSize}px`;
  
  snake.style.display = `block`;
  snake.style.width = `${snakeSize}px`;
  snake.style.height = `${snakeSize}px`;

}


const play = () => {

}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      console.log('left');

      if (x > 0) {
        x = x - 1 * snakeSize;
      }
      else {
        x;
      }
      snake.style.left =`${x}px`;
      break;


    case 39:
      console.log('right');
      if (x < boardSize-1*snakeSize) {
        x = x + 1 * snakeSize;
      }
      else {
        x;
      }
      snake.style.left = `${x}px`;
      break;


    case 38:
      console.log('up');
      if (y > 0) {
        y = y - 1 * snakeSize;
      }
      else {
        y;
      }
      snake.style.top = `${y}px`;
      break;


    case 40:
      console.log('down');
      if (y < boardSize-1*snakeSize) {
          y = y + 1 * snakeSize;
      }
      else {
        y;
      }
      snake.style.top = `${y}px`;
      break;
  }
};
