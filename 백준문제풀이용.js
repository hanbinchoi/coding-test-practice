let fs = require("fs");
let input = fs.readFileSync("ex.txt").toString().split("\n");

let n = Number(input[0]);
let k = input[1].split(" ");
k = k.map((ele) => Number(ele));
k.sort((a, b) => a - b);
let sum = [];
for (let i = 0; i < k.length; i++) {
  if (sum.length !== 0) sum.push(k[i] + sum[i - 1]);
  else sum.push(k[i]);
}
console.log(sum.reduce((acc, cur) => acc + cur));
