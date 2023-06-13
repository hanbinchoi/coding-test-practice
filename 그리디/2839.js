let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

let n = Number(input[0]);
let answer = 0;
let flag = false;
while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    answer += parseInt(n / 5);
    console.log(answer);
    flag = true;
    break;
  }
  answer += 1;
  n -= 3;
}
if (!flag) {
  console.log(-1);
}
