function binarySearch(arr, target, start, end) {
  let mid = parseInt((start + end) / 2);
  if (end < start) return arr[mid] === target ? 1 : 0;

  if (arr[mid] > target) end = mid - 1;
  else start = mid + 1;
  return binarySearch(arr, target, start, end);
}

let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

let nArr = input[1].split(" ").map(Number);
let mArr = input[3].split(" ").map(Number);

nArr.sort((a, b) => a - b);

// for (let i = 0; i < mArr.length; i++) {
//   console.log(binarySearch(nArr, mArr[i], 0, nArr.length - 1));
// }

// for문으로 돌리면 시간초과가 나고 레퍼런스 보고 map으로 바꾸니까 시간초과가 안난다.
// 이해되지 않는다.
const result = mArr.map((v) => binarySearch(nArr, v, 0, nArr.length - 1));

console.log(result.join("\n"));
