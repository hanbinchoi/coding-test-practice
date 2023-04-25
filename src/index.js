let rangeNum = document.querySelector("#range-number input");
let guessNum = document.querySelector("#guess-number input");

let playBtn = document.querySelector("#guess-number #play");

let chose = document.querySelector("#chose");
let result = document.querySelector("#result");
function clickPlay(evnet) {
  let min = 0;
  let max = parseInt(rangeNum.value);

  let answer = Math.floor(Math.random() * (1 + max - min) + min);
  evnet.preventDefault();
  chose.innerText = `You Chose: ${guessNum.value}, the machine chpse: ${answer}.`;
  if (guessNum.value == answer) {
    result.innerText = `You won!`;
  } else [(result.innerText = `You lost!`)];
}

playBtn.addEventListener("click", clickPlay);
