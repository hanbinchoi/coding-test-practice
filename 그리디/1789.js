let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

let t = Number(input[0]);
for (let i = 0; i < t; i++) {
  let n = Number(input[i]);
  console.log(n);
  for (let j = i; j < n + i; j++) {
    let [grade, rank] = input[j + 2].split(" ").map(Number);
    console.log(grade, rank);
  }
}
