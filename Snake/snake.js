let blockSize = 20;
let rows = 20;
let cols = 20;
let board;
let context;
let score = 0;
function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = "Score: " + score;
}
let srce = document.querySelector("#heart");
srce = [];
let srceX;
let srceY;
// snake glava
let snakeX = blockSize * 6;
let snakeY = blockSize * 6;
// snake telo
let snakeBody = [];
//food
let foodX;
let foodY;
let sfoodX;
let sfoodY;
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
  placeSrce();
  // placeSFood();
  updateScore();
  document.addEventListener("keyup", changeDirection);
  // update();
  setInterval(update, 1000 / 10); // 100 milisekundi updejtuje kanvas
};
function update() {
  if (gameOver || score < 0) {
        return;
  };
  // CRTANJE
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, board.width, board.height); //kanvas
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize); // hrana
  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY])
    placeFood();
    score+=2;
    updateScore();
    
    };
    for (let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]; 
    }
  context.fillStyle = "purple"; // snake head !!
  snakeX += pravacX * blockSize;
  snakeY += pravacY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
        gameOver = true;
        alert("Game Over your High Score is " + score);
    }
    for (let i = 0; i < snakeBody.length; i++){
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over your High Score is " + score);
        }
  }
  context.fillStyle = "#000"; //bad food
  context.fillRect(srceX, srceY, blockSize, blockSize);
  if (snakeX == srceX && snakeY == srceY) {
    snakeBody.pop([srceX, srceY]);
    placeSrce();
    score--;
    updateScore(); 
  };
  // context.fillStyle = "blue";
  // context.fillRect(sfoodX, sfoodY, blockSize, blockSize);
  // if (snakeX == sfoodX && snakeY == sfoodY) {
  //   snakeBody.push([sfoodX, sfoodY]);
  //   if (score > 5) {
  //     placeSFood();
  //   }
   
  //   score = score + 10;
  // }
  // updateScore();
};

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

function placeSrce() {
  srceX = Math.floor(Math.random() * cols) * blockSize;
  srceY = Math.floor(Math.random() * rows) * blockSize;
};
//   function placeSFood() {
//     sfoodX = Math.floor(Math.random() * cols) * blockSize;
//     sfoodY = Math.floor(Math.random() * rows) * blockSize;
// };
let body = document.querySelector('body');
body.addEventListener('keydown', (e)=>{
  if (e.code === 'KeyR') location.reload();
  console.log(e);
});


// da napravim special food 
//koja se spawnuje posle 5 pojedjenih crvenih foodova na foru if score > 5(ne moze jer posle 5 je uvek veci)
// spawn special food koje shiftuje niz
//dodajde + 2 i score + 10 fora    for (count === 5 spaawn special food  return count = 0 )