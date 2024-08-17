let box = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newgg = document.getElementById('newg');
let msg = document.getElementById("msg");
let msgg = document.querySelector(".msgg");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = ()=>{
  turn0 = true;
  enableBoxes();
  msgg.classList.add("hide");
};

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
});
});

const disableBoxes = () => {
  for(let boxs of box){
    boxs.disabled = true;
  }
};

const enableBoxes = () => {
  for(let boxs of box){
    boxs.disabled = false;
     boxs.innerText = " ";
  }
};

const showWinner = (winner) => {
    msg.innerText =`Congratulations, Winner is "${winner}" 🥳🎉🎊`;
    msgg.classList.remove("hide");
    disableBoxes();
}

    const checkWinner = () => {
      for (let pattern of winPatterns) {
        let pattern1 = box[pattern[0]].innerText;
        let pattern2 = box[pattern[1]].innerText;
        let pattern3 = box[pattern[2]].innerText;

        if (pattern1 != "" && pattern2 != "" && pattern3 != "") {
          if (pattern1 === pattern2 && pattern2 === pattern3) {
            showWinner(pattern1);
          }
        }
      }
 
};

newgg.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);
