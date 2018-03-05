const board = document.getElementById("board");
const snake = document.getElementById("snake");

let initx = snake.getBoundingClientRect().left;
let inity = snake.getBoundingClientRect().top;

let x = 0;
let y = 0;
let newl, newr, newu, newd;
let maxWidth = board.clientWidth;
let maxHeight = board.clientHeight;


document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      console.log('left');

      if (x > 0) {
        newl = x--;
      }
      else {
        newl = x;
      }
      snake.style.left =`${newl}px`;
      break;


    case 39:
      console.log('right');
      if (x < maxWidth-5) {
        newr = x++;
      }
      else {
        newr = x;
      }
      snake.style.left = `${newr}px`;
      break;


    case 38:
      console.log('up');
      if (y > 0) {
        newu = y--;
      }
      else {
        newu = y;
      }
      snake.style.top = `${newu}px`;
      break;

      
    case 40:
      console.log('down');
      if (y < maxHeight-5) {
        newd = y++;
      }
      else {
        newd = y;
      }
      snake.style.top = `${newd}px`;
      break;
  }
};
