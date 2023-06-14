let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

const n = Number(input[0]);
let h = input[1].split(" ").map(Number);

let height = h[0];
let count = 1;
while (h.length !== 0) {
  if (h.find((ele) => ele === height)) {
    h = h.filter((ele) => ele !== height);
    height--;
  } else {
    height = h[0];
    count++;
  }
}
console.log(count);
