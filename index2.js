
console.log("hello world")
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let game = document.querySelector('.game');
let gameContainer = document.querySelector('.container');
let image = document.querySelector('img');


let turnO = true; 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (turnO) {
            box.innerText = 'O';
            box.style.color = 'green';
            turnO = false;
            box.disabled = true;
            checkWinner();
        } else {
            box.innerText = 'X';
            box.style.color = 'black';
            turnO = true;
            box.disabled = true;
            checkWinner();
        }
    });
});

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => { 
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msg.style.color ="white"
  msgContainer.classList.remove('hide');
  gameContainer.classList.add('d-none');

  disableBoxes();
};


const checkWinner = () => {
  let hasWin = false;
  
  for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

      if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" 
          && pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          hasWin = true;
          return;
      }
  }

 
  if (!hasWin && [...boxes].every((box) => box.innerText !== "")) {
      msg.innerText = 'Match Drawn!';
      msg.style.color ="white"
      msgContainer.classList.remove('hide');
      image.classList.add('d-none');
      gameContainer.classList.add('d-none');

  }
};


const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add('hide');
  const gameContainer = document.querySelector('.container');
  gameContainer.classList.remove('d-none');
};


newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);



