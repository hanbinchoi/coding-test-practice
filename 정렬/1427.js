let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

const arr = input[0];
console.log(
  arr
    .split("")
    .sort((a, b) => b - a)
    .join("")
);
