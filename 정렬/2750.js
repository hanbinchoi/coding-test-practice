let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

const n = Number(input[0]);

const arr = [];
for (i = 1; i < 1 + n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

for (i of arr) {
  console.log(i);
}
