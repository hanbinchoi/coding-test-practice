let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

let t = Number(input[0]);
const test = [];
let start = 2;
let end = 2 + Number(input[1]);
for (let i = 0; i < t; i++) {
  test.push(input.slice(start, end));
  start += test[test.length - 1].length + 1;
  end = start + Number(input[start - 1]);
}
for (t of test) {
  let rHigh;
  let answer = 1;
  let rank = t.map((ele) => ele.split(" ").map(Number));
  rank.sort((a, b) => a[0] - b[0]);

  rank.forEach((element, index) => {
    if (index === 0) {
      rHigh = element[1];
    } else {
      if (rHigh > element[1]) {
        answer++;
        rHigh = element[1];
      }
    }
  });
  console.log(answer);
}
