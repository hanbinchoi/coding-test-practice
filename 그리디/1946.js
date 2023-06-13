let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let cnt = 1;
let flag = false;
while (a <= b) {
  if (a == b) {
    flag = true;
    break;
  }
  if (b % 2 == 0) b = parseInt(b / 2);
  else if (b % 10 == 1) b = parseInt(b / 10);
  else break;
  cnt++;
}
if (!flag) console.log(-1);
else console.log(cnt);
