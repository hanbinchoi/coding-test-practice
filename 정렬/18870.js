let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

const arr = input[1].split(" ").map(Number);
const copyArr = arr.slice();
const map = new Map();
arr.sort((a, b) => a - b);
arr.forEach((ele, idx) => {
  if (!map.has(ele)) map.set(ele, idx);
});
let answer = "";
for (let i = 0; i < copyArr.length; i++) {
  answer += map.get(copyArr[i]) + " ";
}

console.log(answer);
