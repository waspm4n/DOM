let blockSize = 25;
let rows = 15;
let cols = 15;
let board;
let context;

// snake glava
let snakeX = blockSize * 6;
let snakeY = blockSize * 6;

// snake telo
let snakeBody = [];

// food
let foodX;
let foodY;

//Pravac
let pravacX = 0;
let pravacY = 0;
let gameOver = false;
window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d"); //za crtanje po kanvasu (board)
  console.log("Page loaded!");
  placeFood();
  document.addEventListener("keyup", changeDirection);
  // update();
  setInterval(update, 1000 / 10); // 100 milisekundi updejtuje kanvas
};
function update() {
    if (gameOver) {
        return;
    }
  // canvas fill
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, board.width, board.height);

  // food !!!
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY])
    placeFood();
    };
    for (let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]; 
    }
  // snake head !!
  context.fillStyle = "purple";
  snakeX += pravacX * blockSize;
  snakeY += pravacY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
        gameOver = true;
        alert("Game Over");
    }
    for (let i = 0; i < snakeBody.length; i++){
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
}
function changeDirection(e) {
  if (e.code == "ArrowUp" && pravacY !== 1) {
    pravacX = 0;
    pravacY = -1;
  } else if (e.code == "ArrowDown" && pravacY !== -1) {
    pravacX = 0;
    pravacY = 1;
  } else if (e.code == "ArrowRight"&& pravacX !== -1) {
    pravacX = +1;
    pravacY = 0;
  } else if (e.code == "ArrowLeft" && pravacX !== 1) {
    pravacX = -1;
    pravacY = 0;
  }
}
function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}
