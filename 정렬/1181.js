let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

const n = Number(input[0]);
const arr = [];

for (let i = 1; i < 1 + n; i++) {
  if (!arr.includes(input[i])) arr.push(input[i]);
}
arr.sort((a, b) => {
  if (a.length > b.length) return 1;
  else if (a.length === b.length) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  } else return -1;
});

for (i of arr) {
  console.log(i);
}
