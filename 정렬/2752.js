let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString();

const arr = input.split(" ").map(Number);

console.log(arr.sort((a, b) => a - b).join(" "));
