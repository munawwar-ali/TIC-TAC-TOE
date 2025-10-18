const boxes = document.querySelectorAll("#box");
const rstBtn = document.getElementById("rstbtn");
const msg = document.getElementById("msg");
const newGame = document.getElementById("new-btn");
const msgDiv = document.querySelector(".msg-winner");
const turn = document.getElementById("turn");
const history = document.getElementById("history");

let turnO = true;

const winPtn = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turn.innerText = `"X" TURN`;
      turnO = false;
    } else {
      box.innerHTML = "X";
      turn.innerText = `"O" TURN`;
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const boxDisabled = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `CONGRATULATION! Winner is "${winner}"`;
  msgDiv.classList.remove("hide");
  history.innerText = "Current game history!!";
  turn.innerText = "";
  boxDisabled();
};

const checkWinner = () => {
  for (let ptns of winPtn) {
    let ptn1 = boxes[ptns[0]].innerText;
    let ptn2 = boxes[ptns[1]].innerText;
    let ptn3 = boxes[ptns[2]].innerText;

    if (ptn1 != "" && ptn2 != "" && ptn3 != "") {
      if (ptn1 === ptn2 && ptn2 === ptn3) {
        showWinner(ptn1);
      }
    }
  }
};
rstBtn.addEventListener("click", () => {
  location.reload();
});
newGame.addEventListener("click", () => {
  location.reload();
});
