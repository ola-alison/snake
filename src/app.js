const board = document.getElementById("board");
const snake = document.getElementById("snake");
const btnStart = document.getElementById("btn-start");
let userInput, moveThrough, boardSize, snakeSize, food;
let x, foodx = 0;
let y, foody = 0;


let createFood = () => {
  food = document.createElement("div");
  board.appendChild(food).innerHTML = "";

  foodx = Math.floor( Math.random() * 100 );
  foody = Math.floor( Math.random() * 100 );

  food.style.display = `block`;
  food.style.width = `${snakeSize}px`;
  food.style.height = `${snakeSize}px`;
  food.style.background = `yellow`;
  food.style.position = `absolute`;
  food.style.top = `${foody}px`;
  food.style.left = `${foodx}px`;
}

btnStart.onclick = function setSizes() {
  userInput = parseInt(document.getElementById("input-board-size").value);
  moveThrough = document.getElementById("move-through").checked;
  boardSize = userInput * 100;
  snakeSize = userInput * 5;

  board.style.display = `block`;
  board.style.width = `${boardSize}px`;
  board.style.height = `${boardSize}px`;

  snake.style.display = `block`;
  snake.style.width = `${snakeSize}px`;
  snake.style.height = `${snakeSize}px`;
  snake.style.top = `0`;
  snake.style.left = `0`;

  createFood();
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      console.log('left');

      if (x > 0) {
        x = x - snakeSize;
      }
      else {
        if (moveThrough == true) {
          x = boardSize - snakeSize;
        }
        else {
          x;
        }
      }

      snake.style.left =`${x}px`;
      break;


    case 39:
      console.log('right');
      if (x < boardSize - snakeSize) {
        x = x + snakeSize;
      }
      else {
        if (moveThrough == true) {
          x = 0;
        }
        else {
          x;
        }
      }

      snake.style.left = `${x}px`;
      break;


    case 38:
      console.log('up');
      if (y > 0) {
        y = y - snakeSize;
      }
      else {
        if (moveThrough == true) {
          y = boardSize - snakeSize;
        }
        else {
          y;
        }
      }

      snake.style.top = `${y}px`;
      break;


    case 40:
      console.log('down');
      if (y < boardSize - snakeSize) {
        y = y + snakeSize;
      }
      else {
        if (moveThrough == true) {
          y = 0;
        }
        else {
          y;
        }
      }

      snake.style.top = `${y}px`;
      break;
  }



};
