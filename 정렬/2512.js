let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let budget = Number(input[2]);

// 이진 탐색으로 풀기
let start = 1;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let sum = 0;
  for (i of arr) {
    sum += Math.min(i, mid);
  }
  if (sum <= budget) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);

// let sum = arr.reduce((acc, cur) => acc + cur);
// // 모든 요청이 배정될 수 있는 경우에는 요청한 금액을 그대로 배정

// if (sum <= budget) console.log(Math.max(...arr));
// // 모든 요청이 배정될 수 없는 경우 특정한 정수 상한액을 계산하여 그 이상인 요청에는 모두 상한액을 배정
// // 상한액 이하의 요청은 요청한 금액 배정
// else {
//   let max = parseInt(budget / n);
//   while (true) {
//     sum = arr
//       .map((ele) => (ele > max ? max : ele))
//       .reduce((acc, cur) => acc + cur);
//     if (budget < sum) {
//       break;
//     }
//     max += 1;
//   }
//   console.log(max - 1);
// }
