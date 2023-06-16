let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

let [l, w, h] = input[0].split(" ").map(Number);
let n = Number(input[1]);
let size = l * w * h;
let count = 0;
for (let i = n + 1; i > 1; i--) {
  const cube = input[i].split(" ").map(Number);
  const subSize = (2 ** cube[0]) ** 3;
  console.log(cube, subSize, size, count);
  for (let j = 0; j < cube[1]; j++) {
    if (size >= subSize) {
      size -= subSize;
      count++;
    } else {
      break;
    }
    if (size === 0) break;
  }
  if (size === 0) break;
}
size === 0 ? console.log(count) : console.log(-1);
