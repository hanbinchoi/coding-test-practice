let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split(" ");

const n = Number(input[0]);
const k = Number(input[1]);

let sum = 0;
for (let i = 1; i <= k; i++) {
  sum += i;
}

if (sum > n) {
  // 공의 개수가 부족한 경우
  console.log(-1);
} else {
  // 공의 개수가 충분한 경우
  n -= sum;
  if (n % k === 0) console.log(k - 1);
  else console.log(k);
}
